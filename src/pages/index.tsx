import React from "react";
import { Button } from "@nextui-org/react";
import { FaRegPaperPlane, FaGithubAlt } from "react-icons/fa6";
import {
  HeroSectionBlob,
  LiquifiedWave,
} from "../../Components/Shared/svgs/heroSection.svgs.tsx";
import { FaArrowDown } from "react-icons/fa6";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Avatar,
} from "@nextui-org/react";
import { Playfair_Display_SC } from "next/font/google";

const card_inertial_ = Playfair_Display_SC({
  weight: "400",
  subsets: ["latin"],
});

const HeroSection = () => {
  return (
    <>
      <div className=" w-full h-full relative">
        <div className="classbased-grid"></div>
        <div className="wrapper w-full ">
          <br />
          <div className="typography-text my-8 flex items-center font-semibold justify-center flex-col ">
            <h1 className="text-4xl z-10 text-center w-[60%] max-[780px]:text-start max-[780px]:w-[80%] max-[780px]:text-2xl">
              Creative craftsmanship: Crafting code and
              <div className="hovering">
                <span className="relative mx-1 skew-x-0 cursor-pointer hover:skew-x-3 hover:bg-violet-800 inline-block bg-violet-600 shadow-md p-2 text-white">
                  <HeroSectionBlob />
                  Editing Videos.
                </span>
              </div>
            </h1>
            <p className="text-center w-[50%] text-sm max-[780px]:text-start max-[780px]:w-[80%] max-[780px]:text-base text-gray-500 my-3">
              At Craftsman Labs, we specialize in creative craftsmanship,
              meticulously crafting code and expertly editing videos to
              perfection.
            </p>
            <div className="buttonsec my-2 max-[780px]:w-full m-auto max-[780px]:flex max-[780px]:flex-col max-[780px]:justify-center max-[780px]:items-center">
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

          <div className="imagery-responsive hidden"></div>
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
