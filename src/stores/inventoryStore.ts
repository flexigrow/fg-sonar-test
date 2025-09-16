import { create } from "zustand";

export interface InventoryItem {
  id: string;
  name: string;
  description: string;
  category: string;
  quantity: number;
  unitPrice: number;
  supplier: string;
  sku: string;
  location: string;
  minStockLevel: number;
  createdAt: string;
  updatedAt: string;
}

interface InventoryStore {
  items: InventoryItem[];
  addItem: (
    item: Omit<InventoryItem, "id" | "createdAt" | "updatedAt">
  ) => void;
  updateItem: (id: string, updates: Partial<InventoryItem>) => void;
  deleteItem: (id: string) => void;
  getItemById: (id: string) => InventoryItem | undefined;
  getItemsByCategory: (category: string) => InventoryItem[];
  getLowStockItems: () => InventoryItem[];
  updateStock: (id: string, quantity: number) => void;
}

export const useInventoryStore = create<InventoryStore>((set, get) => ({
  items: [
    {
      id: "1",
      name: "Laptop Dell XPS 13",
      description: "High-performance laptop for development work",
      category: "Electronics",
      quantity: 15,
      unitPrice: 1299.99,
      supplier: "Dell Technologies",
      sku: "DELL-XPS13-001",
      location: "Warehouse A - Shelf 1",
      minStockLevel: 5,
      createdAt: "2024-01-10T10:00:00Z",
      updatedAt: "2024-01-15T14:30:00Z",
    },
    {
      id: "2",
      name: "Office Chair Ergonomic",
      description: "Comfortable ergonomic office chair",
      category: "Furniture",
      quantity: 3,
      unitPrice: 299.99,
      supplier: "Office Depot",
      sku: "CHAIR-ERG-001",
      location: "Warehouse B - Section 2",
      minStockLevel: 10,
      createdAt: "2024-01-12T09:00:00Z",
      updatedAt: "2024-01-16T11:15:00Z",
    },
    {
      id: "3",
      name: "Wireless Mouse",
      description: "Bluetooth wireless mouse with USB receiver",
      category: "Electronics",
      quantity: 25,
      unitPrice: 29.99,
      supplier: "Logitech",
      sku: "MOUSE-WIRELESS-001",
      location: "Warehouse A - Shelf 3",
      minStockLevel: 15,
      createdAt: "2024-01-14T13:00:00Z",
      updatedAt: "2024-01-14T13:00:00Z",
    },
  ],

  addItem: (itemData) => {
    const newItem: InventoryItem = {
      ...itemData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    set((state) => ({ items: [...state.items, newItem] }));
  },

  updateItem: (id, updates) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id
          ? { ...item, ...updates, updatedAt: new Date().toISOString() }
          : item
      ),
    }));
  },

  deleteItem: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },

  getItemById: (id) => {
    return get().items.find((item) => item.id === id);
  },

  getItemsByCategory: (category) => {
    return get().items.filter((item) => item.category === category);
  },

  getLowStockItems: () => {
    return get().items.filter((item) => item.quantity <= item.minStockLevel);
  },

  updateStock: (id, quantity) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id
          ? { ...item, quantity, updatedAt: new Date().toISOString() }
          : item
      ),
    }));
  },
}));
