"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./Header").then(m => ({ default: m.Header ?? m.default })), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });
const TopHeader = dynamic(() => import("./TopHeader"), { ssr: false });
const LenisProvider = dynamic(() => import("./LenisProvider"), { ssr: false });
const NoPaperPopupButton = dynamic(() => import("./NoPaperPopupButton"), { ssr: false });

const authRoutes = [
  "/admin",
  "/admin/forget-password",
  "/admin/reset-password",
  "/admin/verify-otp",
  "/auth/signin",
];

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isAuthRoute = authRoutes.includes(pathname);
  const isAdminDashboard = pathname.startsWith("/admin/") && !isAuthRoute;
  const showHeaderAndFooter = !isAuthRoute && !isAdminDashboard;

  if (isAuthRoute) {
    return (
      <>
        {children}
        <Toaster />
      </>
    );
  }

  if (isAdminDashboard) {
    return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            {children}
            <Toaster position="top-center" />
          </SidebarInset>
        </SidebarProvider>
      </ThemeProvider>
    );
  }

  return (
    <LenisProvider>
      {showHeaderAndFooter && (
        <>
          <TopHeader />
          <Header />
        </>
      )}
      <AnimatePresence mode="wait">
        <motion.div key={pathname}>
          <Provider store={store}>
            {children}
          </Provider>
        </motion.div>
      </AnimatePresence>
      {showHeaderAndFooter && <Footer />}
    </LenisProvider>
  );
}
