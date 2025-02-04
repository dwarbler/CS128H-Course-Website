import { Calendar, Home, Info, Lectern, UserRound, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

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
        url: "/",
        icon: Home,
        subitems: [
            {
                title: "Hello",
                url: "/",
                isActive: false
            }
        ]
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
        subitems: []
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
                <SidebarHeader>
                    CS128H
                </SidebarHeader>
                <SidebarGroup>
                    <SidebarMenu>
                        {sidebar_items.map((item, index) => (
                            <Collapsible key={item.title} defaultOpen={index == 1} className={"group/collapsible"}>
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton tooltip={item.title}>
                                            {item.icon && <item.icon />}
                                            <span>{item.title}</span>
                                            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
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
                            </Collapsible>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
