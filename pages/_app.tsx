import { useEffect } from 'react';
import { AppProps } from 'next/app';

import '@/app/globals.css';
import '@/app/locomotive-scroll.css';
import dynamic from "next/dynamic";


const CustomScroll = dynamic(() => import("@/components/CustomScroll"), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  

  return <CustomScroll><Component {...pageProps} /></CustomScroll>;
}

export default MyApp;
