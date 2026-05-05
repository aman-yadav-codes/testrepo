const posts = [
  { id: 1, title: "Getting Started with Next.js", status: "Published", date: "May 1, 2026", author: "Alice" },
  { id: 2, title: "Understanding Tailwind CSS", status: "Draft", date: "May 3, 2026", author: "Bob" },
  { id: 3, title: "Shadcn UI Deep Dive", status: "Published", date: "May 4, 2026", author: "Charlie" },
  { id: 4, title: "Server Components Explained", status: "Review", date: "May 5, 2026", author: "Alice" },
  { id: 5, title: "Deploying on Vercel", status: "Draft", date: "May 5, 2026", author: "Bob" },
];

const statusColor: Record<string, string> = {
  Published: "bg-green-100 text-green-700",
  Draft: "bg-zinc-100 text-zinc-600",
  Review: "bg-amber-100 text-amber-700",
};

export default function ContentPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Content</h1>
          <p className="text-muted-foreground">Manage your articles and posts.</p>
        </div>
        <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
          + New Post
        </button>
      </div>

      <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/40">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Title</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Author</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Date</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-b last:border-0 hover:bg-muted/20 transition-colors">
                <td className="px-4 py-3 font-medium">{post.title}</td>
                <td className="px-4 py-3 text-muted-foreground">{post.author}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColor[post.status]}`}>
                    {post.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{post.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
