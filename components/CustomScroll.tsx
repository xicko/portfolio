'use client';
import LocomotiveScroll from 'locomotive-scroll';
import React, { useEffect, useRef, ReactNode } from 'react';
import dynamic from "next/dynamic";
import '@/app/locomotive-scroll.css';
import locomotiveScroll from 'locomotive-scroll';


interface CustomScrollProps {
  children: ReactNode;
}

const CustomScroll: React.FC<CustomScrollProps> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Scroll update all pages

  



  useEffect(() => {
    if (scrollContainerRef.current) {
      const scroll = new locomotiveScroll({
        el: scrollContainerRef.current,
        smooth: true,
        
      });
      const element = document.querySelector("html");
if (element !== null) {
    new ResizeObserver(() => scroll.update()).observe(element);
} else {
    console.error("The element with the selector '[data-scroll-container]' was not found.");
}


    /*const scrollContainer = document.querySelector<HTMLElement>("[data-scroll-container]");
    if (scrollContainer) {
      const observer = new ResizeObserver(() => {
        (scroll as { update(): void }).update();
      });

      observer.observe(scrollContainer);
    }*/

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollContainerRef} data-scroll-container className='md:pb-20 pb-0'>
      {children}
    </div>
  );
};

export default CustomScroll;
