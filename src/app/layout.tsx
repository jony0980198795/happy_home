import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navtop/Navtop";
import Footer from "../components/footer/Footer";
import { LanguageProvider } from "../context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TMCthaimechatronics",
  description: "บริษัท ทีเอ็มซี ไทยแมคคาทรอนิคส์ ออกแบบและผลิตระบบอัตโนมัติ ตั้งแต่ระบบบำบัดมลพิษไปจนถึงไลน์ผลิตอัจฉริยะ ควบคุมด้วย PLC ประสิทธิภาพสูง",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-16 lg:pt-20">
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
