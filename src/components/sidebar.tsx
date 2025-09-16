"use client";

import { Navigation } from "./navigation";
import { Card } from "@/components/ui/card";

export function Sidebar() {
  return (
    <div className="flex h-full w-64 flex-col border-r bg-background">
      <div className="flex h-16 items-center border-b px-6">
        <h1 className="text-xl font-semibold">Business Manager</h1>
      </div>
      <div className="flex-1 overflow-auto py-4 px-4">
        <Navigation />
      </div>
    </div>
  );
}
