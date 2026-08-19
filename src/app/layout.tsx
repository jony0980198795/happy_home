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
  title: "Happy Home Service HY - บริการดูแลบ้านและซ่อมบำรุงครบวงจร หาดใหญ่",
  description: "บริการดูแลและซ่อมบำรุงบ้านครบวงจรในพื้นที่หาดใหญ่ ทั้งงานแม่บ้าน ล้างแอร์ ซ่อมแซมระบบไฟฟ้า ประปา และงานช่างทั่วไป โดยทีมงานมืออาชีพ",
  openGraph: {
    title: "Happy Home Service HY - บริการดูแลบ้านและซ่อมบำรุงครบวงจร หาดใหญ่",
    description: "บริการดูแลและซ่อมบำรุงบ้านครบวงจรในพื้นที่หาดใหญ่ ทั้งงานแม่บ้าน ล้างแอร์ ซ่อมแซมระบบไฟฟ้า ประปา และงานช่างทั่วไป",
    images: ["/tmc_icon/tmc.png"],
  },
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
