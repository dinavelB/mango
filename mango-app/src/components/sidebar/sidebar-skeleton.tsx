import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarFooter,
  SidebarContent,
} from "../ui/sidebar";
import Menu from "./menus";
import { PanelLeftIcon, User2 } from "lucide-react";
export default function SidebarSkeleton() {
  // use location for url
  // nav for routing
  const location = useLocation();
  const nav = useNavigate();

  const [activeItem, setActiveItem] = useState("home");

  // track active state
  useEffect(() => {
    // eg. /dashboard etc
    const currentPath = location.pathname;
    // find the url path that matches at the menu lists
    // contains: route, icon, text
    // returns an object
    const menuActive = Menu.find((menu) => menu.route === currentPath);

    if (menuActive) {
      setActiveItem(menuActive.text);
    }
  }, [location]);

  const navHandler = (menu: string) => {
    nav(menu);
  };
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className=" flex justify-center pt-5">
          <h1 className="group-data-[collapsible=icon]:hidden">Mango</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarMenu>
            {Menu.map((menu, key) => (
              <SidebarMenuItem key={key}>
                <SidebarMenuButton
                  asChild
                  isActive={activeItem === menu.text}
                  onClick={() => navHandler(menu.route)}
                >
                  <a href="">
                    <menu.icon className="mr-2 h-4 w-4" />
                    <span>{menu.text}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <User2 /> Username
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
