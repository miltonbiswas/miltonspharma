
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ActivityIndicator from "@/components/ActivityIndicator";
import MobileBottomNav from "@/components/MobileBottomNav";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Milton's Pharma | Pharmacy Study Resources",
    template: "%s | Milton's Pharma",
  },
  description:
    "Explore pharmacy study notes, practical files, projects and educational resources for B.Pharm and D.Pharm students.",
  applicationName: "Milton's Pharma",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <ActivityIndicator />
        <MobileBottomNav />
      </body>
    </html>
  );
}
