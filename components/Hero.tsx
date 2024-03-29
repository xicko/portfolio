import React from "react";
import Image from "next/image";
import Social from "./Social";

const Hero = () => {
  return (
    <div>
      <section className='flex justify-center place-items-center space-y-8 flex-col md:mx-20 md:mt-20 mx-10 mt-10 mb-8'>
        <div className='md:max-w-[270px] max-w-[190px]'>
            <Image 
            src={'/portrait.webp'} 
            alt={"Dashnyam's portrait photo"}
            width={600}
            height={600}
            draggable={false}
            priority={true}
            className='rounded-full border-[5px] border-white animate-glow'/>
        </div>

        <div className='space-y-6'>
            <h1 className='text-center md:text-6xl text-5xl font-semibold text-glow'>Dashnyam Batbayar</h1>

            <p className='text-center text-xl'>20   •   New South Wales, Australia</p>

            <p className='text-center text-xl'>Front-End Developer, Augmented Reality Developer</p>
        </div>
      
        <div>
          <Social/>
        </div>
      </section>
    </div>
  );
};

export default Hero;
