import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import CourseInfo from "./pages/CourseInfo.tsx";
import Lectures from "./pages/Lectures.tsx";
import Staff from "./pages/Staff.tsx";
import NoPage from "./pages/NoPage.tsx";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme-provider.tsx";

import "./index.css";

/**
 * Utilizes React BrowserRouter to navigate through the various pages
 * which are linked in the Navbar component.
 *
 * This allows for the site to be a single page application (best
 * fit for the Vite build system) while having more than one page
 */

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
      <SidebarProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/CourseInfo" element={<CourseInfo />} />
          <Route path="/Lectures" element={<Lectures />} />
          <Route path="/Staff" element={<Staff />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </SidebarProvider>
    </BrowserRouter>
    ,
  </ThemeProvider>,
);
