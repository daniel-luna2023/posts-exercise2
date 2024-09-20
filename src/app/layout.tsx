"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import UsersProvider from "@/context/UsersContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UsersProvider>{children}</UsersProvider>
      </body>
    </html>
  );
}
