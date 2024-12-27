import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Figtree } from "next/font/google";
import NavGx from "@/components/ui/NavGx";

const figtree = Figtree({ subsets: ["latin"] });

const getPath = () => {
  if (typeof window !== "undefined") {
    return window.location.pathname;
  }
  return "/";
};

const path = getPath();

export const metadata: Metadata = {
  title: "Stretchio-pre-launch",
  description:
    "Transform your office routine with Stretchio, the ultimate wellness platform designed for desk workers. Say goodbye to stiffness, burnout, and unproductive days with our smart reminders, guided stretches, and personalized wellness routines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={path === "/ar" ? "ar" : "en"}
      dir={path === "/ar" ? "rtl" : "ltr"}
    >
      <body
        className={`bg-background relative text-white ${figtree.className}`}
      >
        <NavGx />
        <NavBar />
        <main className="overflow-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
