import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
  SidebarHeader,
  SidebarGroup,
  SidebarTrigger,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { FolderIcon } from "lucide-react";
export function SkeletonDashboard() {
  const projects = [
    {
      name: "Project Alpha",
      url: "/projects/alpha",
      icon: FolderIcon, // You'll need to import this icon
    },
    {
      name: "Project Beta",
      url: "/projects/beta",
      icon: FolderIcon,
    },
    {
      name: "Project Gamma",
      url: "/projects/gamma",
      icon: FolderIcon,
    },
  ];

  return (
    <section className="m-0 bg-pattern-dot min-h-screen">
      <div className="">
        <SidebarProvider defaultOpen={true}>
          <div className="flex min-h-screen">
            <Sidebar>
              <SidebarContent>
                <p className="p-4">test</p>
                <SidebarGroup>
                  <SidebarGroupLabel className="text-lg">
                    Menu
                  </SidebarGroupLabel>
                  <SidebarMenu>
                    {projects.map((project) => (
                      <SidebarMenuItem key={project.name}>
                        <SidebarMenuButton asChild>
                          <a href={project.url}>
                            <project.icon />
                            <span>{project.name}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <main className="flex-1 p-4 w-100">
              <SidebarTrigger />
              <h1>Main Content</h1>
            </main>
          </div>
        </SidebarProvider>
      </div>
    </section>
  );
}
