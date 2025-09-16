import { create } from "zustand";

export interface Staff {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  hireDate: string;
  salary: number;
  status: "active" | "inactive" | "on-leave";
  manager?: string;
  createdAt: string;
  updatedAt: string;
}

interface StaffStore {
  staff: Staff[];
  addStaff: (staff: Omit<Staff, "id" | "createdAt" | "updatedAt">) => void;
  updateStaff: (id: string, updates: Partial<Staff>) => void;
  deleteStaff: (id: string) => void;
  getStaffById: (id: string) => Staff | undefined;
  getStaffByDepartment: (department: string) => Staff[];
  getActiveStaff: () => Staff[];
  getStaffByPosition: (position: string) => Staff[];
}

export const useStaffStore = create<StaffStore>((set, get) => ({
  staff: [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@company.com",
      phone: "+1-555-0123",
      position: "Senior Developer",
      department: "Engineering",
      hireDate: "2023-01-15",
      salary: 95000,
      status: "active",
      manager: "Sarah Wilson",
      createdAt: "2024-01-10T10:00:00Z",
      updatedAt: "2024-01-15T14:30:00Z",
    },
    {
      id: "2",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@company.com",
      phone: "+1-555-0124",
      position: "Product Manager",
      department: "Product",
      hireDate: "2023-03-20",
      salary: 110000,
      status: "active",
      manager: "Mike Johnson",
      createdAt: "2024-01-12T09:00:00Z",
      updatedAt: "2024-01-16T11:15:00Z",
    },
    {
      id: "3",
      firstName: "Mike",
      lastName: "Johnson",
      email: "mike.johnson@company.com",
      phone: "+1-555-0125",
      position: "Engineering Manager",
      department: "Engineering",
      hireDate: "2022-08-10",
      salary: 130000,
      status: "active",
      createdAt: "2024-01-14T13:00:00Z",
      updatedAt: "2024-01-14T13:00:00Z",
    },
    {
      id: "4",
      firstName: "Sarah",
      lastName: "Wilson",
      email: "sarah.wilson@company.com",
      phone: "+1-555-0126",
      position: "CTO",
      department: "Engineering",
      hireDate: "2021-05-01",
      salary: 180000,
      status: "active",
      createdAt: "2024-01-10T10:00:00Z",
      updatedAt: "2024-01-15T14:30:00Z",
    },
  ],

  addStaff: (staffData) => {
    const newStaff: Staff = {
      ...staffData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    set((state) => ({ staff: [...state.staff, newStaff] }));
  },

  updateStaff: (id, updates) => {
    set((state) => ({
      staff: state.staff.map((member) =>
        member.id === id
          ? { ...member, ...updates, updatedAt: new Date().toISOString() }
          : member
      ),
    }));
  },

  deleteStaff: (id) => {
    set((state) => ({
      staff: state.staff.filter((member) => member.id !== id),
    }));
  },

  getStaffById: (id) => {
    return get().staff.find((member) => member.id === id);
  },

  getStaffByDepartment: (department) => {
    return get().staff.filter((member) => member.department === department);
  },

  getActiveStaff: () => {
    return get().staff.filter((member) => member.status === "active");
  },

  getStaffByPosition: (position) => {
    return get().staff.filter((member) => member.position === position);
  },
}));
