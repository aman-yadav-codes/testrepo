const notifications = [
  { id: 1, type: "info", title: "System update scheduled", message: "Maintenance window is set for May 10, 2026 at 2:00 AM UTC.", time: "2h ago", read: false },
  { id: 2, type: "success", title: "Backup completed", message: "Your full system backup was completed successfully.", time: "5h ago", read: false },
  { id: 3, type: "warning", title: "High CPU usage detected", message: "Server load exceeded 85% for more than 10 minutes.", time: "Yesterday", read: true },
  { id: 4, type: "error", title: "Failed login attempt", message: "Multiple failed login attempts detected from IP 192.168.1.105.", time: "Yesterday", read: true },
  { id: 5, type: "info", title: "New user registered", message: "alice@example.com joined the platform.", time: "2 days ago", read: true },
];

const typeStyle: Record<string, string> = {
  info: "bg-blue-100 text-blue-600",
  success: "bg-green-100 text-green-600",
  warning: "bg-amber-100 text-amber-600",
  error: "bg-red-100 text-red-600",
};

const typeIcon: Record<string, string> = {
  info: "ℹ",
  success: "✓",
  warning: "⚠",
  error: "✕",
};

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">Stay on top of system alerts and updates.</p>
        </div>
        <button className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors">
          Mark all as read
        </button>
      </div>

      <div className="space-y-3">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`rounded-xl border bg-card p-4 shadow-sm flex gap-4 transition-colors ${!n.read ? "border-primary/30 bg-primary/5" : ""}`}
          >
            <div className={`flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${typeStyle[n.type]}`}>
              {typeIcon[n.type]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold truncate">{n.title}</p>
                <span className="text-xs text-muted-foreground shrink-0">{n.time}</span>
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">{n.message}</p>
            </div>
            {!n.read && (
              <div className="size-2 rounded-full bg-primary mt-1.5 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
