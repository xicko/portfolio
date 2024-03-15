/*import Buttone from "@/components/Buttone";*/
import ARProjects from "@/components/ARProjects";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectSwitch from "@/components/ToggleButton";
import ToggleButton from "@/components/ToggleButton";
import WebProjects from "@/components/WebProjects";
import Image from "next/image";

export default function Home() {
  return (
    <main className=''>
      <Hero/>
      <ProjectSwitch
        webProjects={<WebProjects />}
        arProjects={<ARProjects />}
      />
      <Footer/>
    </main>
  );
}
