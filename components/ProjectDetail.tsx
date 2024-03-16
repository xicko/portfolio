import React from 'react';
import VideoPlayerWelcome from './VideoPlayerWelcome';
import Link from 'next/link';

export interface LinkProps {
    effectLink: string;
  }

export interface VideoPlayerProps {
    videoSource: string;
    subText: string;
    topText: string;
    placeHolder: string;
  }

  const videoSource = '/videos/burgerking.mp4';
  const topText = 'Burger King Mongolia'
  const effectLink = 'https://gay.com'

const ProjectDetail = () => {
  return (
    <section className='flex justify-center'>
        <div className='bg-white w-[100vw] h-[100vh] md:p-[150px] flex justify-center md:flex-row flex-col md:space-y-0 space-y-8 space-x-8'>
            <VideoPlayerWelcome videoSource={videoSource} subText={''} topText={topText} placeHolder={'/thumbnails/webp/burgerking.webp'}/>
            <div className='text-black md:space-y-8 space-y-4 md:px-0 px-2'>
                <h2 className='text-6xl font-semibold'>This or That</h2>
                <p className='text-2xl font-normal md:min-w-[400px] md:max-w-[500px] h-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br></br>
                <Link href={effectLink} className='text-black bg-[#D7E0FF] px-4 py-2 text-xl rounded'>Use Effect</Link>
            </div>
            
        </div>
    </section>
  )
}

export default ProjectDetail