import { iconKey } from "./components/Icon";

type group = "main" | "others";
interface Route {
  name: string;
  path: string;
  icon: iconKey;
  badge?: boolean;
}
type RouteGroup = Record<group, Array<Route>>;

export const routes: RouteGroup = {
  main: [
    { name: "Home", path: "/home", icon: "Home" },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "Bar",
      badge: true,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: "Layers",
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: "Check",
    },
    {
      name: "Reporting",
      path: "/reporting",
      icon: "Flag",
    },
    {
      name: "Users",
      path: "/users",
      icon: "User",
    },
  ],
  others: [
    {
      name: "Support",
      path: "/support",
      icon: "Lifebuoy",
    },
    {
      name: "Settings",
      path: "/settings",
      icon: "Settings",
    },
  ],
};
