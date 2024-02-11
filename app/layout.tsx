import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";

const lato = Lato({ weight: "400", subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "KamKaj - Task Manager",
  description:
    "Kamkaj is an advanced task management system designed to synchronize and organize your daily tasks for maximum productivity. It offers features for efficient task management, scheduling, and syncing across multiple devices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
