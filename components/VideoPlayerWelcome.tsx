'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from "next/image";

export interface VideoPlayerProps {
  videoSource: string;
  subText: string;
  topText: string;
  placeHolder: string;
}

const VideoPlayerWelcome = ({ videoSource, subText, topText, placeHolder }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleMouseEnter = () => {
      setIsHovered(true);
      videoElement?.play();
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      videoElement?.pause();
      
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && !isHovered) {
        videoElement?.play();
      } else {
        videoElement?.pause();
      }
    };

    if (videoElement) {
      videoElement.addEventListener('mouseenter', handleMouseEnter);
      videoElement.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        videoElement.removeEventListener('mouseenter', handleMouseEnter);
        videoElement.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }
  }, [isHovered]);

  return (
  <div className='md:min-h-[700px] md:px-0 px-8 w-fit'>
    <section className="relative h-fit w-fit rounded-[10px] overflow-hidden aspect-[9/16]">
      <div className="invisible absolute mt-[300px] inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-[11px] opacity-40"></div>
      </div>

      <div className="absolute bottom-4 left-5 text-white">
        <p className="text-md font-normal drop-shadow-md">{subText}</p>
        <p className="text-lg font-semibold drop-shadow-md">{topText}</p>
      </div>

      

      <video
        ref={videoRef}
        poster={placeHolder}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',}}>
        <source src={videoSource} type="video/mp4" />
      </video>
    </section>
  </div>
  );
};

export default VideoPlayerWelcome;
