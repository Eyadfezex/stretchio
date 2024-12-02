import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Stretchio-pre-launch",
  description:
    "Transform your office routine with Stretchio, the ultimate wellness platform designed for desk workers. Say goodbye to stiffness, burnout, and unproductive days with our smart reminders, guided stretches, and personalized wellness routines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background">
        <NavBar />
        <main className="overflow-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
