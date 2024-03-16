import type { Metadata } from "next";
import "./globals.css";

import '@/app/locomotive-scroll.css';
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";


const CustomScroll = dynamic(() => import("@/components/CustomScroll"), { ssr: false });

export const metadata: Metadata = {
  title: 'Portfolio - Dashnyam',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='customfont scroll-smooth'>
        <CustomScroll>
          {children}
          <Footer/>
          </CustomScroll>
      </body>
    </html>
  );
}
