import { Lora, Inter } from "next/font/google";
import "./globals.css";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "./providers/AuthProvider";
import { ThemeProvider } from "@/components/theme-provider";
import ClientLayout from "./components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lora",
});

export const metadata = {
  title: {
    default: "Saroj Educational Group | Best Colleges in Lucknow",
    template: "%s | Saroj Educational Group"
  },
  description: "Saroj Educational Group offers B.Tech, MBA, BBA, MCA, Pharmacy and Polytechnic programs in Lucknow. AICTE approved, AKTU affiliated.",
  keywords: ["engineering college lucknow", "pharmacy college lucknow", "AKTU affiliated college", "B.Tech admission", "MBA college", "best college lucknow"],
  verification: {
    google: "C8of1rnVVen9rqntxrSKm7_qjP9nDA6rd7BModpYWvE",
  },
  openGraph: {
    title: "Saroj Educational Group | Best Colleges in Lucknow",
    description: "Top Engineering & Pharmacy College in Lucknow",
    url: "https://seglko.org",
    siteName: "Saroj Educational Group",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${lora.variable} ${inter.className} antialiased`}>
        <AuthProvider>
          <ClientLayout>{children}</ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
