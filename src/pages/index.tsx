import React from "react";
import { Button } from "@nextui-org/react";
import { FaRegPaperPlane, FaGithubAlt } from "react-icons/fa6";
import { motion } from "framer-motion";
import {
  HeroSectionBlob,
  LiquifiedWave,
} from "../../Components/Shared/svgs/heroSection.svgs.tsx";

const HeroSection = () => {
  return (
    <>
      <div className=" w-full h-full relative">
        <div className="classbased-grid"></div>
        <div className="wrapper w-full">
          <br />
          <div className="typography-text  my-8 flex items-center font-semibold justify-center flex-col ">
            <div className="info-arrow">
              <HeroSectionBlob />
            </div>
            <h1 className="text-4xl text-center w-[60%] max-[780px]:text-start max-[780px]:w-[80%] max-[780px]:text-3xl">
              Creative craftsmanship: Crafting code and Editing Videos. Which is
              all about!~
            </h1>
            <div className="buttonsec my-3 max-[780px]:w-full m-auto max-[780px]:flex max-[780px]:flex-col max-[780px]:justify-center max-[780px]:items-center">
              <Button
                color="secondary"
                startContent={<FaRegPaperPlane />}
                variant="shadow"
                className={`max-[780px]:mb-3 max-[780px]:w-[80%]`}
              >
                Lookup our work!
              </Button>
              <Button
                color="secondary"
                startContent={<FaGithubAlt />}
                variant="ghost"
                className={`max-[780px]:mb-3 max-[780px]:w-[80%] max-[780px]:mx-0 mx-3`}
              >
                We &lsquo re on github.!
              </Button>
            </div>
          </div>
          <div className="imagery"></div>
        </div>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <div className="root-container m-auto">
        <section className="hero-section w-full h-screen ">
          <HeroSection />
        </section>
        <section className="second-lander-section overflow-x-hidden h-screen bg-black text-white">
          <LiquifiedWave />
          <h1 className="text-2xl">Hello, world!</h1>
        </section>
        <section className="third-lander-section h-screen">
          <h1>Animation to be done here 💀</h1>
        </section>
      </div>
    </>
  );
};
export default Home;
