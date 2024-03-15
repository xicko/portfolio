/*import Buttone from "@/components/Buttone";*/
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ToggleButton from "@/components/ToggleButton";
import WebProjects from "@/components/WebProjects";
import Image from "next/image";

export default function Home() {
  return (
    <main className=''>
      <Hero/>
      <WebProjects/>
      <Footer/>
    </main>
  );
}
