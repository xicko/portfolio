import React from 'react';
import { useRouter } from 'next/router';
import VideoPlayerWelcome from '@/components/VideoPlayerWelcome';
import Link from 'next/link';
import Footer from '@/components/Footer';

// Define the type for AR project data
interface ARProjectData {
  videoSource: string;
  topTitle: string;
  topText: string;
  effectLink: string;
  placeHolder: string;
  fullDescription: string;
}

// Define AR projects with their slugs as keys
const arProjects: Record<string, ARProjectData> = {
  'burgerking1': {
    videoSource: '/videos/burgerking.mp4',
    topTitle: 'This Or That?',
    topText: 'Burger King Mongolia',
    effectLink: 'https://www.instagram.com/ar/284575277304570/',
    placeHolder: '/thumbnails/webp/burgerking.webp',
    fullDescription: '1',
  },

  'lightning-halo': {
    videoSource: '/videos/lightninghalo.mp4',
    topTitle: 'Lightning Halo',
    topText: '',
    effectLink: 'https://www.instagram.com/ar/3419292975068246/',
    placeHolder: '/thumbnails/webp/lightninghalo.webp',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },

  'unitel': {
    videoSource: '/videos/unitel.mp4',
    topTitle: 'Unitel Green Dot',
    topText: 'Unitel',
    effectLink: 'https://www.instagram.com/ar/430300512125145/',
    placeHolder: '/thumbnails/webp/unitel.webp',
    fullDescription: 'This AR filter utilizes target tracking on Unitel\'s new rebranding posters. The filter dynamically overlays a neon outline and animates green dots/bubbles, creating an engaging interactive experience for viewers.',
  },

  'whynaadam': {
    videoSource: '/videos/whynaadam.mp4',
    topTitle: 'Why Naadam',
    topText: 'Next Electronics',
    effectLink: 'https://www.instagram.com/ar/759472885195057/',
    placeHolder: '/thumbnails/webp/whynaadam.webp',
    fullDescription: 'This interactive filter uses randomization to reveal a user\'s Naadam experience, transforming them into a Mongolian wrestler, or a queen, or even a funny potato! Developed for Next Electronics\' social media campaign promoting the Naadam celebration in Mongolia, in collaboration with artist Young Mo\'g\'s single "Naadii"',
  },

  'devsummit': {
    videoSource: '/videos/devsummit.mp4',
    topTitle: 'DevSummit 2022',
    topText: 'Artisty',
    effectLink: 'https://www.instagram.com/ar/1133924154084681/',
    placeHolder: '/thumbnails/webp/devsummit.webp',
    fullDescription: 'An interactive filter created for Artisty at DevSummit 2022 that utilizes full-body tracking to let users try-on futuristic mixed reality headsets. Additionally, when users fully enter the frame, they transform into neon robots.',
  },

  'koreanfood': {
    videoSource: '/videos/koreanfood.mp4',
    topTitle: 'Korean Food',
    topText: 'Korea Travel Organization',
    effectLink: 'https://www.instagram.com/ar/4367278686689320/',
    placeHolder: '/thumbnails/webp/koreanfood.webp',
    fullDescription: 'This interactive game filter challenges users to catch falling Korean dishes, increasing their score. Reach a score of 10 to win! Developed for the Korean Travel Organization Mongolia\'s giveaway campaign.',
  },

  'hanbok': {
    videoSource: '/videos/hanbok.mp4',
    topTitle: 'Hanbok',
    topText: 'Korea Travel Organization',
    effectLink: 'https://www.instagram.com/ar/1548842432128283/',
    placeHolder: '/thumbnails/webp/hanbok.webp',
    fullDescription: 'This interactive filter allows users to virtually try on different types of Korean traditional clothes, Hanbok. It was created for a giveaway campaign by the Korean Travel Organization Mongolia.',
  },

  'tengri': {
    videoSource: '/videos/tengri.mp4',
    topTitle: 'Tengri',
    topText: '',
    effectLink: 'https://www.instagram.com/ar/1368282557107974/',
    placeHolder: '/thumbnails/webp/tengri.webp',
    fullDescription: '8',
  },

  'haayachgesen': {
    videoSource: '/videos/haayachgesen.mp4',
    topTitle: 'Haaya ch gesen',
    topText: 'EMPR',
    effectLink: 'https://www.instagram.com/ar/223689836421545/',
    placeHolder: '/thumbnails/webp/haayachgesen.webp',
    fullDescription: '9',
  },

  'nextgroup': {
    videoSource: '/videos/nextgroup.mp4',
    topTitle: 'Next Group',
    topText: 'Next Group',
    effectLink: 'https://www.instagram.com/ar/457150153253641/',
    placeHolder: '/thumbnails/webp/nextgroup.webp',
    fullDescription: '10',
  },

  'christmashat': {
    videoSource: '/videos/christmashat.mp4',
    topTitle: 'Christmas Hat',
    topText: '',
    effectLink: 'https://www.instagram.com/ar/312880286763692/',
    placeHolder: '/thumbnails/webp/christmashat.webp',
    fullDescription: '11',
  },

  'xickomode': {
    videoSource: '/videos/xickomode.mp4',
    topTitle: 'XICKO MODE',
    topText: '',
    effectLink: 'https://www.instagram.com/ar/2070284609781254/',
    placeHolder: '/thumbnails/webp/xickomode.webp',
    fullDescription: '12',
  },

  'blindinglights': {
    videoSource: '/videos/blindinglights.mp4',
    topTitle: 'Blinding Lights',
    topText: '',
    effectLink: 'https://www.instagram.com/ar/539568850052441/',
    placeHolder: '/thumbnails/webp/blindinglights.webp',
    fullDescription: '13',
  },
};

const ARProject: React.FC = () => {
  const router = useRouter();
  const { ARprojects } = router.query;
  const projectData = arProjects[ARprojects as string];

  if (!projectData) {
    // Handle case when project data is not found
    return <div>Project not found</div>;
  }

  const { videoSource, topTitle, topText, effectLink, placeHolder, fullDescription } = projectData;

  return (
    <section className='flex shrink grow justify-center customfont md:mb-0 mb-20'>
      <div className=' w-full h-full md:p-[150px] md:pt-[150px] pt-8 flex justify-center md:flex-row flex-col md:space-y-0 space-y-8 space-x-8'>
        <VideoPlayerWelcome videoSource={videoSource} subText='' topText={topText} placeHolder={placeHolder} />
        <div className='text-white md:space-y-8 md:min-w-[400px] md:max-w-[500px] space-y-4 md:px-0 px-2'>
          <h2 className='md:text-6xl text-4xl font-semibold'>{topTitle}</h2>
          <p className='text-2xl font-normal  md:pr-0 pr-8 h-auto'>
           {fullDescription}
          </p>
          <br />
          <Link href={effectLink} target='_blank' className='text-black bg-[#D7E0FF] px-4 py-2 text-xl rounded'>Try Effect</Link>
        </div>
      </div>
      
    </section>
  );
};

export default ARProject;
