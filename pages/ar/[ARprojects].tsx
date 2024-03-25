import React from "react";
import { useRouter } from "next/router";
import VideoPlayerWelcome from "@/components/VideoPlayerWelcome";
import Link from "next/link";
import Footer from "@/components/Footer";
import Head from 'next/head';

// Define the type for AR project data
interface ARProjectData {
  videoSource: string;
  topTitle: string;
  topText: string;
  effectLink: string;
  placeHolder: string;
  fullDescription: string;

  title: string;
  metadescription: string;
}

// Define AR projects with their slugs as keys
const arProjects: Record<string, ARProjectData> = {
  burgerking1: {
    videoSource: "/videos/burgerking726.mp4",
    topTitle: "This Or That?",
    topText: "Burger King Mongolia",
    effectLink: "https://www.instagram.com/ar/284575277304570/",
    placeHolder: "/thumbnails/webp/burgerking.webp",
    fullDescription: 'Interactive AR filter designed for Burger King Mongolia\'s Instagram audience, it allows users to make choices between two presented options in a fun and engaging way. It adds a playful element to brand interactions on the platform.',
    
    title: 'This Or That?',
    metadescription: 'AR Project for Burger King Mongolia',
  },

  lightninghalo: {
    videoSource: "/videos/lightninghalo.mp4",
    topTitle: "Lightning Halo",
    topText: "",
    effectLink: "https://www.instagram.com/ar/3419292975068246/",
    placeHolder: "/thumbnails/webp/lightninghalo.webp",
    fullDescription: "This concept AR filter combines the aesthetics of an Angel and Lightning God.  A halo hovers above the user's head, while electric lightning bolts can be created between the hands and emanate from the eyes.",
    
    title: 'Lightning Halo',
    metadescription: 'Personal Project',
    },

  unitel: {
    videoSource: "/videos/unitel.mp4",
    topTitle: "Unitel Green Dot",
    topText: "Unitel",
    effectLink: "https://www.instagram.com/ar/430300512125145/",
    placeHolder: "/thumbnails/webp/unitel.webp",
    fullDescription: "This AR filter utilizes target tracking on Unitel's new rebranding posters. The filter dynamically overlays a neon outline and animates green dots/bubbles, creating an engaging interactive experience for viewers.",
    
    title: 'Unitel Green Dot',
    metadescription: 'AR Project for Unitel',
    },

  whynaadam: {
    videoSource: "/videos/whynaadam.mp4",
    topTitle: "Why Naadam",
    topText: "Next Electronics",
    effectLink: "https://www.instagram.com/ar/759472885195057/",
    placeHolder: "/thumbnails/webp/whynaadam.webp",
    fullDescription: "This interactive filter uses randomization to reveal a user's Naadam experience, transforming them into a Mongolian wrestler, or a queen, or even a funny potato! Developed for Next Electronics' social media campaign promoting the Naadam celebration in Mongolia, in collaboration with artist Young Mo'g's single \"Naadii\"",
  
    title: 'WhyNaadam',
    metadescription: 'AR Project for Next Electronics',
    },

  devsummit: {
    videoSource: "/videos/devsummit.mp4",
    topTitle: "DevSummit 2022",
    topText: "Artisty",
    effectLink: "https://www.instagram.com/ar/1133924154084681/",
    placeHolder: "/thumbnails/webp/devsummit.webp",
    fullDescription: "An interactive filter created for Artisty at DevSummit 2022 that utilizes full-body tracking to let users try-on futuristic mixed reality headsets. Additionally, when users fully enter the frame, they transform into neon robots.",
    
    title: 'DevSummit 2022',
    metadescription: 'AR Project for Artisty',
    },

  koreanfood: {
    videoSource: "/videos/koreanfood.mp4",
    topTitle: "Korean Food",
    topText: "Korea Travel Organization",
    effectLink: "https://www.instagram.com/ar/4367278686689320/",
    placeHolder: "/thumbnails/webp/koreanfood.webp",
    fullDescription: "This interactive game filter challenges users to catch falling Korean dishes, increasing their score. Reach a score of 10 to win! Developed for the Korean Travel Organization Mongolia's giveaway campaign.",
    
    title: 'Korean Food',
    metadescription: 'AR Project for Korea Travel Organization',
    },

  hanbok: {
    videoSource: "/videos/hanbok.mp4",
    topTitle: "Hanbok",
    topText: "Korea Travel Organization",
    effectLink: "https://www.instagram.com/ar/1548842432128283/",
    placeHolder: "/thumbnails/webp/hanbok.webp",
    fullDescription: "This interactive filter allows users to virtually try on different types of Korean traditional clothes, Hanbok. It was created for a giveaway campaign by the Korean Travel Organization Mongolia.",
    
      title: 'Hanbok',
    metadescription: 'AR Project for Korea Travel Organization',
    },

  tengri: {
    videoSource: "/videos/tengri.mp4",
    topTitle: "Tengri",
    topText: "",
    effectLink: "https://www.instagram.com/ar/1368282557107974/",
    placeHolder: "/thumbnails/webp/tengri.webp",
    fullDescription: "This filter incorporates full Mongolian aesthetics with a touch of eeriness. Users will see themselves with glowing white eyes and black tears. The filter applies the ancient Mongol/Xiongnu symbols for Fire, Sun, and Moon on the left cheek. On the right cheek, it displays the quote \"Eternal Blue Sky\" in traditional Mongolian script with a volumetric light effect. Additionally, a quote from the Middle Mongol era written in traditional script slowly pulses in the background.",
    
    title: 'Tengri',
    metadescription: 'Personal Project',
  },

  haayachgesen: {
    videoSource: "/videos/haayachgesen.mp4",
    topTitle: "Haaya ch gesen",
    topText: "EMPR",
    effectLink: "https://www.instagram.com/ar/223689836421545/",
    placeHolder: "/thumbnails/webp/haayachgesen.webp",
    fullDescription: "A randomizer filter presents users with a series of randomized options. Based on their results, it reveals a positive action or outcome. This filter was created for EMPR's campaign promoting positivity and combating hate. The goal is to discourage harmful hate comments that negatively impact all parties involved.",
    
    title: 'Haaya ch gesen',
    metadescription: 'AR Project for EMPR',
  },

  nextgroup: {
    videoSource: "/videos/nextgroup.mp4",
    topTitle: "Next Group",
    topText: "Next Group",
    effectLink: "https://www.instagram.com/ar/457150153253641/",
    placeHolder: "/thumbnails/webp/nextgroup.webp",
    fullDescription: "A randomizer filter that offers users a series of randomized options to reveal what brings them happiness. Created for Next Group's New Year social media campaign.",
    
    title: 'Next Group',
    metadescription: 'AR Project for Next Group',
  },

  christmashat: {
    videoSource: "/videos/christmashat.mp4",
    topTitle: "Christmas Hat",
    topText: "",
    effectLink: "https://www.instagram.com/ar/312880286763692/",
    placeHolder: "/thumbnails/webp/christmashat.webp",
    fullDescription: "A Christmas-themed filter allowing users to virtually try on four different colored Christmas hats in 3D, accompanied by a subtle snowing effect. ",
    
    title: 'Christmas Hat',
    metadescription: 'Personal Project',
  },

  xickomode: {
    videoSource: "/videos/xickomode.mp4",
    topTitle: "XICKO MODE",
    topText: "",
    effectLink: "https://www.instagram.com/ar/2070284609781254/",
    placeHolder: "/thumbnails/webp/xickomode.webp",
    fullDescription: "A filter featuring an animated dynamic fire effect on the user, overlaid with purple lightning animation and edge-detection sparkles. The filter is color graded for a slightly more saturated look.",
  
    title: 'XICKO MODE',
    metadescription: 'Personal Project',
  },

  blindinglights: {
    videoSource: "/videos/blindinglights.mp4",
    topTitle: "Blinding Lights",
    topText: "",
    effectLink: "https://www.instagram.com/ar/539568850052441/",
    placeHolder: "/thumbnails/webp/blindinglights.webp",
    fullDescription: "A filter demonstrating volumetric lightning, creating a shiny light effect when pointed at bright light sources.",
  
    title: 'Blinding Lights',
    metadescription: 'Personal Project',
  },
};

const ARProject: React.FC = () => {
  const router = useRouter();
  const { ARprojects } = router.query;
  const projectData = arProjects[ARprojects as string];

  const handleGoBack = () => {
    router.back();
  };

  if (!projectData) {
    // Handle case when project data is not found
    return <div>Project not found</div>;
  }

  const {
    videoSource,
    topTitle,
    topText,
    effectLink,
    placeHolder,
    fullDescription,
    title,
    metadescription,
  } = projectData;

  return (
    <section className=" flex shrink grow justify-center md:flex-row flex-col customfont md:mb-0 mb-20">
      <Head>
        <title>{title}</title>
        <meta name="description" content={metadescription} />
      </Head>
      <div className='flex justify-center pt-8'>
        <button
          className="block md:hidden md:absolute z-50 text-white top-4 md:right-auto left-4 right-4 md:left-4 font-medium text-lg py-2 px-4 -mb-8 rounded"
          onClick={handleGoBack}
        >
          ← Back to Home
        </button>
      </div>
      <div className="md:bg-white border-opacity-90 md:rounded-xl w-fit h-full md:my-[100px] md:pt-0 pt-8 md:px-0 md:pb-0 md:mt-20 flex justify-center md:flex-row flex-col md:space-y-0 space-y-8 space-x-8">
        <VideoPlayerWelcome
          videoSource={videoSource}
          subText=""
          topText={topText}
          placeHolder={placeHolder}
        />
        <div className="md:text-black text-white md:space-y-8 md:min-w-[400px] md:max-w-[500px] space-y-4 md:px-0 px-2 md:pr-10 md:pt-8">
          <div>
            <button
              className="translate-x-0 hover:translate-x-[-15px] ease duration-500 transition z-50 text-slate-700 top-4 md:right-auto right-4 md:left-4 font-medium text-xl py-2 hidden md:block px-4 rounded"
              onClick={handleGoBack}
            >
              ← Back to Home
            </button>
          </div>
          <h2 className="md:text-6xl text-4xl  font-semibold">{topTitle}</h2>
          <p className="text-2xl font-normal  md:pr-0 pr-8 h-auto">
            {fullDescription}
          </p>
          <br />
          <Link
            href={effectLink}
            target="_blank"
            className="text-black bg-[#D7E0FF] hover:bg-[#273357] hover:text-white ease duration-150 transition px-4 py-2 text-xl rounded"
          >
            Try Effect
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ARProject;
