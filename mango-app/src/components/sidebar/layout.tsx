import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SidebarSkeleton from "./sidebar-skeleton";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarSkeleton />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
