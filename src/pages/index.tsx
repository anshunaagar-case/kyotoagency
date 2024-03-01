import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container m-auto h-auto">
        <section className="header-container grid grid-cols-2 h-[80vh] max-[760px]:h-[110vh]  max-[760px]:flex max-[760px]:flex-col">
          <div className="texting p-6 h-auto max-[760px]:p-12">
            <h1 className="text-6xl text-start  moon-rock max-[760px]:w-full">
              Exquisite creations by the team!
            </h1>
            <p className="text-xl max-[760px]:text-normal  my-4 w-[70%] max-[760px]:w-full  text-gray-500">
              We craft stunning visual stories, blending creativity and
              technology to bring your vision to life with cinematic flair.
            </p>
          </div>
          <div className="imagery h-auto">imagery</div>
        </section>
      </div>
    </>
  );
}
