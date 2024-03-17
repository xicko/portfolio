import React from "react";
import { useRouter } from "next/router";
import VideoPlayerWelcome from "@/components/VideoPlayerWelcome";
import Link from "next/link";
import Footer from "@/components/Footer";

// Define the type for AR project data
interface WEBProjectData {
  videoSource: string;
  topTitle: string;
  topText: string;
  effectLink: string;
  placeHolder: string;
  fullDescription: string;
}

// Define AR projects with their slugs as keys
const webProjects: Record<string, WEBProjectData> = {
  ARFX: {
    videoSource: "/videos/burgerking.mp4",
    topTitle: "ARFX",
    topText: "Burger King Mongolia",
    effectLink: "https://www.arfx.org",
    placeHolder: "/thumbnails/webp/burgerking.webp",
    fullDescription: 'A mock augmented reality agency website that features it\'s projects, clients, experience, statistics, and why you should choose their service.'
  },

  Dashnyam: {
    videoSource: "/videos/lightninghalo.mp4",
    topTitle: "Dashnyam",
    topText: "",
    effectLink: "https://www.dashnyam.com",
    placeHolder: "/thumbnails/webp/lightninghalo.webp",
    fullDescription:
      "This concept AR filter combines the aesthetics of an Angel and Lightning God.  A halo hovers above the user's head, while sparking lightning bolts can be created between the hands and emanate from the eyes.",
  },

  Inxta: {
    videoSource: "/videos/unitel.mp4",
    topTitle: "Inxta",
    topText: "Unitel",
    effectLink: "https://inxta.dashnyam.com",
    placeHolder: "/thumbnails/webp/unitel.webp",
    fullDescription:
      "This AR filter utilizes target tracking on Unitel's new rebranding posters. The filter dynamically overlays a neon outline and animates green dots/bubbles, creating an engaging interactive experience for viewers.",
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

  const {
    videoSource,
    topTitle,
    topText,
    effectLink,
    placeHolder,
    fullDescription,
  } = projectData;

  return (
    <section className=" flex shrink grow justify-center md:flex-row flex-col customfont md:mb-0 mb-20">
      <div className='flex justify-center pt-8'>
        <button
          className="block md:hidden md:absolute z-50 text-white top-4 md:right-auto left-4 right-4 md:left-4 font-medium text-lg py-2 px-4 -mb-8 rounded"
          onClick={handleGoBack}
        >
          ← Back to Home
        </button>
      </div>
      <div className="md:bg-white border-opacity-90 md:rounded-xl w-fit h-full md:my-[150px] md:pt-0 pt-8 md:px-0 md:pb-0 md:mt-8 flex justify-center md:flex-row flex-col md:space-y-0 space-y-8 space-x-8">
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
            Visit Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WEBProject;
