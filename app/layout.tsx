import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ActiveLog",
  description: "Track workouts, nutrition, and goals.",
};

// Pages that should NOT show the navbar
const NO_NAVBAR_ROUTES = ["/", "/login", "/signup"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-950">
        {/* 
          NOTE: To conditionally hide Navbar on landing/auth pages,
          move Navbar logic into a client component that reads usePathname().
          For now it renders on all pages — hide on /, /login, /signup manually
          once auth is wired up in Sprint 2.
        */}
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
