export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to the admin panel.</p>
      </div>

      {/* Stats grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Users", value: "4,231", change: "+12%" },
          { label: "Active Sessions", value: "842", change: "+3%" },
          { label: "Revenue", value: "$12,430", change: "+8%" },
          { label: "Pending Tasks", value: "17", change: "-2%" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border bg-card p-5 shadow-sm"
          >
            <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
            <p className="mt-1 text-3xl font-bold">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.change} from last month</p>
          </div>
        ))}
      </div>

      {/* Placeholder content area */}
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {[
            "New user registered — alice@example.com",
            "Settings updated by admin",
            "Report generated for April",
            "3 new support tickets opened",
            "System backup completed",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm">
              <div className="size-2 rounded-full bg-primary shrink-0" />
              <span className="text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
