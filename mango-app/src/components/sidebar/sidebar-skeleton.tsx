import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarGroupContent,
} from "../ui/sidebar";

export default function SidebarSkeleton() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu></SidebarMenu>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent></SidebarGroupContent>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive>
                <a href="#">Home</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroup>
        </SidebarHeader>
      </Sidebar>
    </SidebarProvider>
  );
}
