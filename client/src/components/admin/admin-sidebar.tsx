import { BoxIcon, Home, LogOut, Shield, SquarePen } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { useVerifyAuthApi } from "@/services/auth/auth-queries";
import { Button } from "../ui/button";
import { useSignOut } from "@/services/auth/auth-mutation";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: Shield,
  },
  {
    title: "Products",
    url: "/admin/products-list",
    icon: BoxIcon,
  },
  {
    title: "Create Product",
    url: "/admin/create-product",
    icon: SquarePen,
  },
];

export default function AdminSidebar() {
  const { data: isAuthenticated } = useVerifyAuthApi();
  const { mutate: SignOut } = useSignOut();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl font-bold py-5">
            <Link to="/admin/dashboard">Admin Dashboard</Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="space-y-2 py-3 px-1">
          <h1>{isAuthenticated?.data.name}</h1>
          <h2>{isAuthenticated?.data.email}</h2>
          <Button onClick={() => SignOut()} size={"lg"}>
            <LogOut />
            Logout
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
