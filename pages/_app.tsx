import { useEffect } from 'react';
import { AppProps } from 'next/app';
import type { Metadata } from "next";
import '@/app/globals.css';
import '@/app/locomotive-scroll.css';
import dynamic from "next/dynamic";
import Footer from '@/components/Footer';
import Head from 'next/head';

const metadata = {
  icons: [
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
};

const CustomScroll = dynamic(() => import("@/components/CustomScroll"), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  

  return  <>
            <Head>
        {/* Iterate over your icon data and include each icon */}
        {metadata.icons?.map((icon, index) => (
          <link
            key={index}
            rel="icon"
            media={icon.media}
            href={icon.href}
            type="image/x-icon"
          />
        ))}
      </Head>
            <Component {...pageProps} />
            <Footer/>
          </>;
}

export default MyApp;
