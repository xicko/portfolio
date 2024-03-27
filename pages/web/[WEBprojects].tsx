import React from "react";
import { useRouter } from "next/router";
import VideoPlayerWelcome from "@/components/VideoPlayerWelcome";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";
import Head from 'next/head';

// Define the type for AR project data
interface WEBProjectData {
  imageUrl: string;
  topTitle: string;
  projectLink: string;
  alt: string;
  fullDescription: string;

  title: string;
  metadescription: string;
}

// Define AR projects with their slugs as keys
const webProjects: Record<string, WEBProjectData> = {
  ARFX: {
    imageUrl: "/web/detail/arfxdetail.webp",
    topTitle: "ARFX",
    projectLink: "https://www.arfx.org",
    alt: "/thumbnails/webp/burgerking.webp",
    fullDescription:
      "This mock website showcases a fictional augmented reality agency. It highlights the agency's projects, client list, team experience, industry statistics, and the value proposition of their services.",
    title: 'ARFX',
    metadescription: 'Mock AR Agency Project',
    },

  Dashnyam: {
    imageUrl: "/web/detail/dashnyamdetail.webp",
    topTitle: "Dashnyam",
    projectLink: "https://www.dashnyam.com",
    alt: "/thumbnails/webp/lightninghalo.webp",
    fullDescription:
      "This personal website showcases Dashnyam's experience and skills as an Augmented Reality developer. It features examples of AR projects, AR graphic assets, along with contact information and client experience.",
    title: 'Dashnyam',
    metadescription: 'Personal Portfolio Project',
    },

  Inxta: {
    imageUrl: "/web/detail/inxtadetail.webp",
    topTitle: "Inxta",
    projectLink: "https://inxta.dashnyam.com",
    alt: "/thumbnails/webp/unitel.webp",
    fullDescription:
      "The landing page highlights Inxta, a modified Android app for Instagram, offering in-app media downloads, ad-free usage, and privacy controls such as blocking seen receipts and anonymous story/livestream viewing and more. The website includes version details and a download link.",
    title: 'Inxta',
    metadescription: 'Modified Instagram Apk Project',
    },
};

const WEBProject: React.FC = () => {
  const router = useRouter();
  const { WEBprojects } = router.query;
  const projectData = webProjects[WEBprojects as string];

  const handleGoBack = () => {
    router.back();
  };

  if (!projectData) {
    // Handle case when project data is not found
    return <div>Project not found</div>;
  }

  const { alt, imageUrl, topTitle, projectLink, fullDescription, title, metadescription } =
    projectData;

  return (
    <section className=" flex shrink grow justify-center md:flex-row flex-col customfont md:mb-[-50px] mb-20">
      <Head>
        <title>{title}</title>
        <meta name="description" content={metadescription} />
      </Head>
      <div className="flex justify-center pt-8">
        <button
          className="block md:hidden md:absolute z-50 text-white top-4 md:right-auto left-4 right-4 md:left-4 font-medium text-lg py-2 px-4 -mb-8 rounded"
          onClick={handleGoBack}
        >
          ← Back to Home
        </button>
      </div>
      <div className="md:bg-white border-opacity-90 md:rounded-xl w-fit h-full md:my-[150px] md:pt-0 pt-8 md:px-0 md:pb-0 md:mt-[150px] flex justify-center md:flex-row flex-col md:space-y-0 space-y-8 space-x-8">
        <div className='md:max-w-[650px] w-fit md:mx-0 mx-8'>
          <Image
          className="w-full rounded-[10px] border-4 border-white border-opacity-90"
          src={imageUrl}
          alt={alt}
          width={600}
          height={600}
          draggable={false}/>
        </div>
        
        <div className="md:text-black text-white md:space-y-2 md:min-w-[600px] md:max-w-[600px] space-y-4 md:px-0 px-2 md:pr-10 md:pt-4">
          <div>
            <button
              className="translate-x-0 hover:translate-x-[-15px] ease duration-500 transition z-50 text-slate-700 top-4 md:right-auto right-4 md:left-4 font-medium text-xl py-2 hidden md:block px-4 rounded"
              onClick={handleGoBack}
            >
              ← Back to Home
            </button>
          </div>
          <div className='md:space-y-6 space-y-4'>
            <h2 className="md:text-6xl text-4xl  font-semibold">{topTitle}</h2>
            <p className="text-2xl font-normal  md:pr-0 pr-8 h-auto">{fullDescription}</p>
            <br />
            <Link
            href={projectLink}
            target="_blank"
            className="text-black bg-[#D7E0FF] hover:bg-[#a7baff] ease duration-300 transition px-4 py-2 text-xl rounded">
            Visit Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WEBProject;
