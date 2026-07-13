import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
    <main className="flex-1 p-4">
  <div className="flex items-center gap-3 mb-6">
    <SidebarTrigger />
    <h1 className="text-3xl font-bold text-orange-600">
      OVIADSO
    </h1>
  </div>

  {children}
</main>
    </SidebarProvider>
  )
}