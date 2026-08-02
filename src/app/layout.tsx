import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";

export const metadata: Metadata = {
  title: "Data Point Technologies | CCTV, Networking, Fiber Optic Solutions",
  description: "Leading IT system integrators in Pakistan. Expert in CCTV Security & Surveillance, Networking Solutions, Fiber Optic Communication, and Data Communication.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen pt-16 lg:pt-20">{children}</main>
        <Footer />
        <AIChatbot />
      </body>
    </html>
  );
}
