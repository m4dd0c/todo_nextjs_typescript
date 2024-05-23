import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ContextState from "@/context/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo | Create, Complete & Delete",
  description:
    "Simple todo app made using nextjs to create read update complete and delete task.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextState>{children}</ContextState>
      </body>
    </html>
  );
}
