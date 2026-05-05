export default function MutedNotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Muted Notifications</h1>
        <p className="text-muted-foreground">View alerts that have been silenced.</p>
      </div>
      <div className="rounded-xl border bg-card p-6 shadow-sm text-center text-muted-foreground">
        No muted notifications.
      </div>
    </div>
  );
}
