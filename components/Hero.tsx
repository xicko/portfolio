import React from "react";
import Social from "./Social";
import HeroImage from "./HeroImage";

const portraitPhotos: string[] = ["/portrait.webp", "/avatar2.webp"];

const Hero = () => {
  return (
    <div>
      <section className="flex justify-center place-items-center space-y-8 flex-col md:mx-20 md:mt-20 mx-10 mt-10 mb-8">
        <HeroImage portraits={portraitPhotos} />

        <div className="space-y-6">
          <h1 className="text-center md:text-6xl text-5xl font-semibold text-glow">
            Dashnyam Batbayar
          </h1>

          <p className="text-center text-xl">20 • New South Wales, Australia</p>

          <p className="text-center text-xl">
            Front-End Developer, Augmented Reality Developer
          </p>
        </div>

        <div>
          <Social />
        </div>
      </section>
    </div>
  );
};

export default Hero;
