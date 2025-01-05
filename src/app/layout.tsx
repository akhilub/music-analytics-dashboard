import { Metadata } from "next";

import { Header } from "@/components/header/header";
import { AppSidebar } from "@/components/sidebar/sidebar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Streamify",
  description: "Your music streaming service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2ecc71" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      
      <body className={`antialiased`}>
        <ThemeProvider>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="p-4 @container/dashboard">
              <Header />
              {children}
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
