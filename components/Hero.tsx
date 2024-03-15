import React from "react";
import Image from "next/image";

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
            className='rounded-full border-[5px] border-white'/>
        </div>

        <div className='space-y-6'>
            <h1 className='text-center md:text-6xl text-5xl font-semibold'>Dashnyam Batbayar</h1>

            <p className='text-center text-xl'>20   •   New South Wales, Australia</p>

            <p className='text-center text-xl'>Augmented Reality Developer, Front-End Developer</p>
        </div>
      
      </section>
    </div>
  );
};

export default Hero;
