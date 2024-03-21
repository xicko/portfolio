import { useEffect } from 'react';
import { AppProps } from 'next/app';
import type { Metadata } from "next";
import '@/app/globals.css';
import '@/app/locomotive-scroll.css';
import dynamic from "next/dynamic";
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/dashblack.ico',
        href: '/dashblack.ico',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/dashwhite.ico',
        href: '/dashwhite.ico',
      },
    ],
  },
};

const CustomScroll = dynamic(() => import("@/components/CustomScroll"), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  

  return  <div>
            <Component {...pageProps} />
            <Footer/>
          </div>;
}

export default MyApp;
