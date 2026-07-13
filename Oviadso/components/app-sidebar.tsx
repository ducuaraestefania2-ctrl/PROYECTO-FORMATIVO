"use client"

import { useState } from "react"
import Link from "next/link"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
  LayoutDashboard,
  Baby,
  Skull,
  Wheat,
  HeartPulse,
  PawPrint,
  HeartHandshake,
  CalendarHeart,
  User,
  ChevronDown,
  ChevronRight,

} from "lucide-react"

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    title: "Usuario",
    icon: User,
    children: [
      { title: "Tabla Usuario", url: "/dashboard/user" },
      { title: "Formulario Usuario", url: "/dashboard/user/form" },
    ],
  },

  {
    title: "Nacimientos",
    icon: Baby,
    children: [
      { title: "Tabla Nacimientos", url: "/dashboard/birth" },
      { title: "Formulario Nacimientos", url: "/dashboard/birth/form" },
    ],
  },

  {
    title: "Mortalidad",
    icon: Skull,
    children: [
      { title: "Tabla Mortalidad", url: "/dashboard/mortality" },
      { title: "Formulario Mortalidad", url: "/dashboard/mortality/form" },
    ],
  },

  {
    title: "Alimentación",
    icon: Wheat,
    children: [
      { title: "Tabla Alimentación", url: "/dashboard/feeding" },
      { title: "Formulario Alimentación", url: "/dashboard/feeding/form" },
    ],
  },

  {
    title: "Sanidad",
    icon: HeartPulse,
    children: [
      { title: "Tabla Sanidad", url: "/dashboard/health" },
      { title: "Formulario Sanidad", url: "/dashboard/health/form" },
    ],
  },

  {
    title: "Ovino",
    icon: PawPrint,
    children: [
      { title: "Tabla Ovino", url: "/dashboard/ovine" },
      { title: "Formulario Ovino", url: "/dashboard/ovine/form" },
    ],
  },

  {
    title: "Montas",
    icon: HeartHandshake,
    children: [
      { title: "Tabla Montas", url: "/dashboard/mounting" },
      { title: "Formulario Montas", url: "/dashboard/mounting/form" },
    ],
  },

  {
    title: "Partos",
    icon: CalendarHeart,
    children: [
      { title: "Tabla Partos", url: "/dashboard/delivery" },
      { title: "Formulario Partos", url: "/dashboard/delivery/form" },
    ],
  },

  {
    title: "Responsables",
    icon: User,
    children: [
      { title: "Tabla Responsables", url: "/dashboard/responsibles" },
      { title: "Formulario Responsables", url: "/dashboard/responsibles/form" },
    ],
  },
]

export function AppSidebar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  return (
    <Sidebar className="bg-orange-50 border-r border-orange-200">
      <SidebarHeader>
        <h2 className="px-4 py-4 text-2xl font-bold text-orange-600">
          OVIADSO
        </h2>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>

              {items.map((item) => (
                <SidebarMenuItem key={item.title}>

                  {item.children ? (
                    <>
                      <SidebarMenuButton
                        onClick={() =>
                          setOpenMenu(
                            openMenu === item.title ? null : item.title
                          )
                        }
                        className={`
    rounded-lg
    hover:bg-orange-100
    hover:text-orange-600
    transition-all
    duration-200
    ${openMenu === item.title
                            ? "bg-orange-100 text-orange-700"
                            : ""
                          }
  `}
                      >
                        <item.icon className="h-4 w-4" />

                        <span className="flex-1">
                          {item.title}
                        </span>

                        {openMenu === item.title ? (
                          <ChevronDown size={16} />
                        ) : (
                          <ChevronRight size={16} />
                        )}
                      </SidebarMenuButton>

                      {openMenu === item.title && (
                        <div className="ml-8 mt-2 flex flex-col gap-2">

                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.url}
                              className="text-sm hover:underline"
                            >
                              {child.title}
                            </Link>
                          ))}

                        </div>
                      )}
                    </>
                  ) : (
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}

                </SidebarMenuItem>
              ))}

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/responsable">
                <User />
                <span>Responsable</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}