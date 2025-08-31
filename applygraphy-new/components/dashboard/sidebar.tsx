"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import {
  Home,
  Search,
  FileText,
  GraduationCap,
  DollarSign,
  MessageSquare,
  Settings,
  User,
  BarChart3,
  Calendar,
  BookOpen,
} from "lucide-react"
import Link from "next/link"

const menuItems = [
  {
    title: "Overview",
    items: [
      { title: "Dashboard", url: "/dashboard", icon: Home },
      { title: "My Profile", url: "/dashboard/profile", icon: User },
      { title: "Applications", url: "/dashboard/applications", icon: FileText },
    ],
  },
  {
    title: "Discover",
    items: [
      { title: "Find Programs", url: "/dashboard/search", icon: Search },
      { title: "AI Matches", url: "/dashboard/matches", icon: BarChart3 },
      { title: "Scholarships", url: "/dashboard/scholarships", icon: DollarSign },
    ],
  },
  {
    title: "Tools",
    items: [
      { title: "Documents", url: "/dashboard/documents", icon: FileText },
      { title: "Calendar", url: "/dashboard/calendar", icon: Calendar },
      { title: "Resources", url: "/dashboard/resources", icon: BookOpen },
    ],
  },
  {
    title: "Community",
    items: [
      { title: "Forum", url: "/dashboard/forum", icon: MessageSquare },
      { title: "Mentoring", url: "/dashboard/mentoring", icon: GraduationCap },
    ],
  },
]

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div
          className="flex items-center space-x-2 px-4 py-6 relative overflow-hidden rounded-lg"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(2, 21, 61, 0.9), rgba(255, 106, 92, 0.9)), url("/placeholder.svg?height=120&width=300")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-white">APPLYGRAPHY</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {menuItems.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="hover:bg-[#FF6A5C]/10 hover:text-[#FF6A5C]">
                      <Link href={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="hover:bg-[#FF6A5C]/10 hover:text-[#FF6A5C]">
              <Link href="/dashboard/settings">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
