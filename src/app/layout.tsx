import type { Metadata } from "next";
import "./globals.css";
import { McLaren } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mclaren = McLaren({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mclaren",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trackside",
  description: "Your all-in-one F1 web application",
  icons: [
    {
      rel: "icon",
      type: "image/ico",
      sizes: "32x32",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mclaren.className} antialiased`}>
        <div className="flex min-h-screen flex-col justify-between">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
