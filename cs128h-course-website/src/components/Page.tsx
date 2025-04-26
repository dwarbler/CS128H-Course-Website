import { AppSidebar } from "@/components/Sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "./mode-toggle";

export function Page({ ...props }): JSX.Element {
  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-0 border-b pl-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-4 ml-4" />
          <div className="flex justify-between items-center size-full p-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbPage>Home</BreadcrumbPage>
                </BreadcrumbItem>
                {props.breadcrumb ? (
                  <>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{props.title}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                ) : null}
              </BreadcrumbList>
            </Breadcrumb>
            <ModeToggle />
          </div>
        </header>
        {props.body}
      </SidebarInset>
    </>
  );
}
