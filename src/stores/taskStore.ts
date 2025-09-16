import { create } from "zustand";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  assignedTo?: string;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}

interface TaskStore {
  tasks: Task[];
  addTask: (task: Omit<Task, "id" | "createdAt" | "updatedAt">) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  getTaskById: (id: string) => Task | undefined;
  getTasksByStatus: (status: Task["status"]) => Task[];
}

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [
    {
      id: "1",
      title: "Setup project structure",
      description:
        "Initialize Next.js project with TypeScript and Tailwind CSS",
      status: "completed",
      priority: "high",
      assignedTo: "John Doe",
      dueDate: "2024-01-15",
      createdAt: "2024-01-10T10:00:00Z",
      updatedAt: "2024-01-15T14:30:00Z",
    },
    {
      id: "2",
      title: "Implement user authentication",
      description: "Add login and registration functionality",
      status: "in-progress",
      priority: "high",
      assignedTo: "Jane Smith",
      dueDate: "2024-01-20",
      createdAt: "2024-01-12T09:00:00Z",
      updatedAt: "2024-01-16T11:15:00Z",
    },
    {
      id: "3",
      title: "Design responsive layout",
      description: "Create mobile-friendly navigation and layout components",
      status: "pending",
      priority: "medium",
      assignedTo: "Mike Johnson",
      dueDate: "2024-01-25",
      createdAt: "2024-01-14T13:00:00Z",
      updatedAt: "2024-01-14T13:00:00Z",
    },
  ],

  addTask: (taskData) => {
    const newTask: Task = {
      ...taskData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    set((state) => ({ tasks: [...state.tasks, newTask] }));
  },

  updateTask: (id, updates) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id
          ? { ...task, ...updates, updatedAt: new Date().toISOString() }
          : task
      ),
    }));
  },

  deleteTask: (id) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },

  getTaskById: (id) => {
    return get().tasks.find((task) => task.id === id);
  },

  getTasksByStatus: (status) => {
    return get().tasks.filter((task) => task.status === status);
  },
}));
