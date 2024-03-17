'use client';

import React, { useRef, useEffect } from 'react';

export interface VideoPlayerProps {
  videoSource: string;
  subText: string;
  topText: string;
  placeHolder: string;
}

const VideoPlayerWelcome = ({ videoSource, subText, topText, placeHolder }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.play().catch((error) => {
        // Autoplay was prevented, handle the error or ignore it.
        console.error('Autoplay was prevented:', error);
      });

      return () => {
        videoElement.pause();
      };
    }
  }, []);

  return (
    <div className='md:min-h-[700px] md:px-0 px-8 min-w-[300px] w-fit '>
      <section className="relative h-fit w-fit rounded-[10px] overflow-hidden aspect-[9/16]">
        <div className="border-b-4 border-r-4 border-l-4  border-white border-opacity-90 rounded-b-[10px] absolute mt-[300px] inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-[11px] opacity-30"></div>
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
          preload="auto"
          className="border-4 border-white border-opacity-90 rounded-[10px]"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}>
          <source src={videoSource} type="video/mp4" />
        </video>
      </section>
    </div>
  );
};

export default VideoPlayerWelcome;
