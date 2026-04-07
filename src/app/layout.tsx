import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Waqas Ahmed | Portfolio",
  description:
    "Creative Developer & Designer crafting exceptional digital experiences",
  keywords: "portfolio, developer, designer, web development",
  authors: [{ name: "Waqas Ahmed" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-gray-100`}>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
