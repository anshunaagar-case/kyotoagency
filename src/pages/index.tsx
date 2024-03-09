import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <div className="container m-auto h-auto">
        <section className="  header-container grid grid-cols-2 h-[80vh] max-[760px]:h-[90vh]  max-[760px]:flex max-[760px]:flex-col">
          {theme === "dark" ? (
            <video
              src="/svgs/grid.mp4"
              className="absolute top-0 left-0 object-cover w-full h-full -z-10 opacity-30"
              autoPlay
              muted
              loop
            />
          ) : (
            <video
              src="/svgs/grid-white.mp4"
              className="absolute top-0 left-0 object-cover w-full h-full -z-10 opacity-30"
              autoPlay
              muted
              loop
            />
          )}

          <div className="texting p-6 h-auto max-[760px]:p-12">
            <h1 className="text-6xl text-start  moon-rock max-[760px]:w-full">
              Exquisite creations by the team!
            </h1>
            <p className="text-xl max-[760px]:text-base  my-4 w-[70%] max-[760px]:w-full  text-gray-500">
              We craft stunning visual stories, blending creativity and
              technology to bring your vision to life with cinematic flair.
            </p>
            <Button
              className=" text-white w-[200px] h-[60px] rounded-lg"
              color="secondary"
            >
              Learn more
            </Button>
          </div>
          <div className="imagery h-auto">

          </div>
        </section>
        <div className="broker-divider">
          <br />
        </div>
        <section className="container h-screen">
          <h1>Second screen</h1>
        </section>
      </div>
    </>
  );
}
