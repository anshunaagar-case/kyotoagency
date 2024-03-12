import React from "react";
import { Button } from "@nextui-org/react";
import { FaRegPaperPlane, FaGithubAlt } from "react-icons/fa6";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <>
      <div className="initial-container w-full h-full relative">
        <div className="classbased-grid"></div>
        <div className="wrapper w-full">
          <br />
          <div className="typography-text  my-8 flex items-center font-semibold justify-center flex-col ">
            <h1 className="text-4xl text-center w-[60%] max-[780px]:text-start max-[780px]:w-[80%]">
              Creative craftsmanship: Crafting code and Editing Videos. Which is
              all about!~
            </h1>
            <div className="buttonsec my-4 max-[780px]:w-full m-auto max-[780px]:flex max-[780px]:flex-col max-[780px]:items-center">
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
                We're on github.!
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
      <div className="root-container">
        <section className="hero-section w-full h-screen ">
          <HeroSection />
        </section>
        <div className="breaker">
          <br />
        </div>
        <section className="second-lander-section h-screen">
          <h1 className="text-2xl">Hello, world</h1>
        </section>
      </div>
    </>
  );
};
export default Home;
