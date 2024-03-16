import { useEffect } from 'react';
import { AppProps } from 'next/app';

import '@/app/globals.css';
import '@/app/locomotive-scroll.css';
import dynamic from "next/dynamic";
import Footer from '@/components/Footer';


const CustomScroll = dynamic(() => import("@/components/CustomScroll"), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  

  return  <div>
            <Component {...pageProps} />
            <Footer/>
          </div>;
}

export default MyApp;
