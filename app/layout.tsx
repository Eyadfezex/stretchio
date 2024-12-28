"use client";
import { usePathname } from "next/navigation";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Figtree } from "next/font/google";
import NavGx from "@/components/ui/NavGx";

const figtree = Figtree({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Use usePathname to dynamically get the current path
  const pathname = usePathname();

  const metadata = {
    title: "Stretchio-pre-launch",
    description:
      "Transform your office routine with Stretchio, the ultimate wellness platform designed for desk workers. Say goodbye to stiffness, burnout, and unproductive days with our smart reminders, guided stretches, and personalized wellness routines.",
  };
  // Determine language and direction
  const lang = pathname?.startsWith("/ar") ? "ar" : "en";
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
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
