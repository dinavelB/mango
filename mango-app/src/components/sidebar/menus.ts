import {
  Home,
  CircleUserRound,
  ChartNoAxesCombined,
  Settings,
  Folder,
} from "lucide-react";

const Menu = [
  {
    icon: Home,
    text: "Home",
    route: "/dashboard",
  },
  {
    icon: CircleUserRound,
    text: "Clients",
    route: "/clients",
  },
  {
    icon: ChartNoAxesCombined,
    text: "Analytics",
    route: "/analytics",
  },
  {
    icon: Settings,
    text: "Settings",
    route: "/settings",
  },
  {
    icon: Folder,
    text: "Projects",
    route: "/projects",
  },
];

export default Menu;
