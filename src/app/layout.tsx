import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/shared/sidebar/sidebar";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "An awesome person representative website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <>
            <Navbar />
            <main className="container mx-auto dark:text-gray-300 md:grid md:grid-cols-12">
              <Sidebar />
              <section className="md:col-span-9 col-span-12">
                {children}
                <Footer className="hidden md:block" />
              </section>
            </main>
            <Footer className="block md:hidden" />
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
