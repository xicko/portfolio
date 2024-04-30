/*import Buttone from "@/components/Buttone";*/
import ARProjects from "@/components/ARProjects";
import Footer from "@/components/Footer";
import AnimatedComponent from "@/components/AnimatedComponent";
import ProjectSwitch from "@/components/ToggleButton";
import WebProjects from "@/components/WebProjects";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <main className=''>
      <AnimatedComponent>
        <Hero/>
      </AnimatedComponent>

      <AnimatedComponent>
        <ProjectSwitch
        webProjects={<WebProjects/>}
        arProjects={<ARProjects/>}/>
      </AnimatedComponent>

      <AnimatedComponent>
        <Footer/>
      </AnimatedComponent>
    </main>
  );
}
