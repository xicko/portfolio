"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";

interface Props {
  portraits: string[];
}


const HeroImage: React.FC<Props> = ({ portraits }) => {
  
  const [currentPortraitIndex, setCurrentPortraitIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPortraitIndex(prevIndex => (prevIndex + 1) % portraits.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [portraits]);

  return (
    <div className="md:max-w-[270px] max-w-[190px]">
      <Image
        src={portraits[currentPortraitIndex]}
        alt={"Dashnyam's portrait photo"}
        width={600}
        height={600}
        draggable={false}
        priority={true}
        className="rounded-full border-[5px] border-white animate-glow"
      />
    </div>
  );
};

export default HeroImage;
