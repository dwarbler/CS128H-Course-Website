"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"


const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"



export default function Navbar(): JSX.Element {
    /**
     * Returns the JSX corresponding to the navbar at the top
     * of the site.
     * 
     * This utilizes the React BrowserRouter setup in main.tsx
     * 
     * @returns JSX With React Router Links to site subpages
     */
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Get Started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            <li>
                                <ListItem href="/" title="Home">
                                    The Home Page
                                </ListItem>
                            </li>
                            <li>
                                <ListItem href="/CourseInfo" title="Course Info">
                                    The Course Info Page
                                </ListItem>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        // <nav className="navBar">
        //     <img className="logo" src={courseLogo} alt="CS128H Logo"></img>
        //     <div className="links">
        //         <Link to="/">home()</Link>
        //         <Link to="/CourseInfo">course_info()</Link>
        //         <Link to="/Lectures">lectures()</Link>
        //         <Link to="/Grades">grades()</Link>
        //         <Link to="/Staff">staff()</Link>
        //     </div>
        // </nav>
    )
}