# Business Management System

A modern Next.js application for managing tasks, inventory, and staff with a beautiful UI built using shadcn/ui and state management powered by Zustand.

## Features

### 📋 Task Management

- Create, edit, and delete tasks
- Track task status (Pending, In Progress, Completed)
- Set task priorities (Low, Medium, High)
- Assign tasks to team members
- Set due dates
- Kanban-style board view

### 📦 Inventory Management

- Add and manage inventory items
- Track stock levels and set minimum thresholds
- Monitor low stock alerts
- Calculate total inventory value
- Organize items by categories
- Track supplier information and SKUs

### 👥 Staff Management

- Manage employee information
- Track departments and positions
- Monitor salary information
- Set employee status (Active, Inactive, On Leave)
- Organize reporting structure

### 📊 Dashboard

- Overview of all business metrics
- Quick access to recent activities
- Low stock alerts
- Task completion statistics
- Staff overview

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: Zustand
- **Icons**: Lucide React

## Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run the development server**:

   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Dashboard
│   ├── tasks/             # Task management
│   ├── inventory/         # Inventory management
│   ├── staff/             # Staff management
│   └── settings/          # Settings page
├── components/            # Reusable UI components
│   ├── ui/                # shadcn/ui components
│   ├── navigation.tsx     # Navigation component
│   └── sidebar.tsx        # Sidebar layout
├── stores/                # Zustand state stores
│   ├── taskStore.ts       # Task management store
│   ├── inventoryStore.ts  # Inventory management store
│   └── staffStore.ts      # Staff management store
└── lib/                   # Utility functions
    └── utils.ts           # Helper functions
```

## State Management

The application uses Zustand for state management with separate stores for each module:

- **TaskStore**: Manages tasks, CRUD operations, and filtering
- **InventoryStore**: Handles inventory items, stock levels, and alerts
- **StaffStore**: Manages employee data and organizational structure

## UI Components

Built with shadcn/ui components including:

- Cards and layouts
- Forms and inputs
- Tables and data display
- Dialogs and modals
- Badges and status indicators
- Navigation components

## Features Overview

### Task Management

- ✅ Create new tasks with detailed information
- ✅ Update task status and details
- ✅ Delete tasks
- ✅ Filter tasks by status
- ✅ Assign tasks to team members
- ✅ Set priorities and due dates

### Inventory Management

- ✅ Add inventory items with full details
- ✅ Track stock levels and minimum thresholds
- ✅ Low stock alerts and notifications
- ✅ Calculate total inventory value
- ✅ Organize by categories
- ✅ Supplier and SKU tracking

### Staff Management

- ✅ Add and manage employee records
- ✅ Track departments and positions
- ✅ Monitor salary information
- ✅ Set employee status
- ✅ Organizational hierarchy

### Dashboard

- ✅ Overview of all business metrics
- ✅ Recent activity summaries
- ✅ Quick access to alerts
- ✅ Statistical insights

## Development

The application is built with modern React patterns and best practices:

- **TypeScript** for type safety
- **Server Components** where appropriate
- **Client Components** for interactive features
- **Responsive design** for all screen sizes
- **Accessible UI** components
- **Clean code structure** with separation of concerns

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
