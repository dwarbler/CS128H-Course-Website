import { Calendar, Home, Info, Lectern, UserRound, ChevronRight, ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import Logo from "../assets/logo.png"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarSeparator,
} from "@/components/ui/sidebar"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

// Menu items.
const sidebar_items = [
    {
        title: "Home",
        url: "/CourseInfo",
        icon: Home,
    },
    {
        title: "Course Info",
        url: "/CourseInfo",
        icon: Info,
        subitems: []
    },
    {
        title: "Course Calendar",
        url: "#",
        icon: Calendar,
        subitems: []
    },
    {
        title: "Lectures",
        url: "/Lectures",
        icon: Lectern,
        subitems: [
            {
                title: "Hello",
                url: "/",
                isActive: false
            }
        ]
    },
    {
        title: "Course Staff",
        url: "/Staff",
        icon: UserRound,
        subitems: []
    },
]

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarContent>
                <SidebarHeader className="h-16 border-b border-sidebar-border">
                    <SidebarMenu className="mt-auto mb-auto">
                        <SidebarMenuButton size="lg">
                            <img src={Logo} alt="Course Logo" className="mr-auto size-8" />
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">128 Honors</span>
                                <span className="truncate text-xs">CS@Illinois</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarGroup className="py-0">
                    <SidebarMenu>
                        {sidebar_items.map((item, index) => (
                            <Collapsible key={item.title} defaultOpen={index == 1} className={"group/collapsible"}>
                                <SidebarMenuItem className="py-1">
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton tooltip={item.title} asChild={(item.subitems) ? false : true}>
                                            {item.subitems ? (
                                                <>
                                                    {item.icon && <item.icon />}
                                                    <span>{item.title}</span>
                                                    <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                                </>
                                            ) : (
                                                <Link to={item.url}>
                                                    {item.icon && <item.icon />}
                                                    <span>{item.title}</span>
                                                    <ArrowUpRight size={16} className="ml-auto padding-0" />
                                                </Link>
                                            )}
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    {item.subitems?.length ? (
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {item.subitems.map((item) => (
                                                    <SidebarMenuSubItem key={item.title}>
                                                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                                                            <Link to={item.url}>{item.title}</Link>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    ) : null}
                                </SidebarMenuItem>
                                <SidebarSeparator className="mx-0" />
                            </Collapsible>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
