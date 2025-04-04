import type { Metadata } from "next";
import { montserrat } from "../fonts/fonts";
import "./globals.css";
import NavBar from "@/components/navbar/navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
