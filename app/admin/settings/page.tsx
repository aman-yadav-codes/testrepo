export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your application preferences.</p>
      </div>

      {/* General */}
      <div className="rounded-xl border bg-card p-6 shadow-sm space-y-4">
        <h2 className="text-base font-semibold">General</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-sm font-medium">App Name</label>
            <input
              defaultValue="My App"
              className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Support Email</label>
            <input
              defaultValue="support@example.com"
              className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="rounded-xl border bg-card p-6 shadow-sm space-y-4">
        <h2 className="text-base font-semibold">Notifications</h2>
        {[
          { label: "Email on new user signup", defaultChecked: true },
          { label: "Email on failed login attempts", defaultChecked: true },
          { label: "Weekly analytics digest", defaultChecked: false },
          { label: "System maintenance alerts", defaultChecked: true },
        ].map((item) => (
          <div key={item.label} className="flex items-center justify-between">
            <span className="text-sm">{item.label}</span>
            <button
              className={`relative h-5 w-9 rounded-full transition-colors ${item.defaultChecked ? "bg-primary" : "bg-muted"}`}
            >
              <span
                className={`absolute top-0.5 size-4 rounded-full bg-white shadow transition-transform ${item.defaultChecked ? "translate-x-4" : "translate-x-0.5"}`}
              />
            </button>
          </div>
        ))}
      </div>

      {/* Save */}
      <div className="flex justify-end">
        <button className="rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
}
