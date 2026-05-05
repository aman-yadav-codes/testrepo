import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-1 flex-col min-h-screen w-full">
        <header className="sticky top-0 z-10 flex h-14 items-center border-b bg-background px-4 gap-2">
          <SidebarTrigger className="-ml-1" />
          <div className="w-px h-4 bg-border" />
          <span className="text-sm font-medium text-muted-foreground">Admin</span>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </SidebarProvider>
  );
}
