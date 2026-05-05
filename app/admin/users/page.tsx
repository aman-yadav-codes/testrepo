"use client"

import { DataTable } from "@/components/ui/data-table"
import { columns, User } from "./columns"

const users: User[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active", joined: "Jan 12, 2026" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Active", joined: "Feb 3, 2026" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Viewer", status: "Inactive", joined: "Mar 19, 2026" },
  { id: 4, name: "Diana Prince", email: "diana@example.com", role: "Editor", status: "Active", joined: "Apr 7, 2026" },
  { id: 5, name: "Ethan Hunt", email: "ethan@example.com", role: "Viewer", status: "Active", joined: "Apr 22, 2026" },
];

export default function UsersPage() {
  return (
    <div className="space-y-6 w-full max-w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Users</h1>
          <p className="text-muted-foreground">Manage platform users and their roles.</p>
        </div>
        <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shrink-0">
          + Invite User
        </button>
      </div>

      <DataTable columns={columns} data={users} searchKey="name" filterPlaceholder="Filter by name..." />
    </div>
  );
}