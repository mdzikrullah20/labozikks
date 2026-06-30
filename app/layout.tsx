import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import TopBar from "./Components/Header/TopHeader";
import MainHeader from "./Components/Header/Header"
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laboziks - Scientific Research & Laboratory Solutions",
  description:
    "Advanced laboratory testing, research solutions, and scientific innovation services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >

        {/* GLOBAL HEADER (ALL PAGES) */}
        <TopBar />
        <MainHeader />

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* GLOBAL FOOTER */}
        <Footer />

      </body>
    </html>
  );
}