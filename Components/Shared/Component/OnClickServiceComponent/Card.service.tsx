import React from "react";
import { Card, CardFooter, CardHeader, Button, Image } from "@nextui-org/react";

const ServiceCard = (props: any) => {
  return (
    <>
      {/* enter tailwind height and width only */}
      <Card
        className={`w-[300px] h-[300px] max-[980px]:w-[250px] max-[980px]:h-[250px] border-none`}
        isFooterBlurred
        radius="lg"
        shadow="lg"
      >
        <Image
          alt="Woman listing to music"
          className="object-cover"
          src={props.serviceImage}
        />

        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny">Available soon.</p>
          <Button
            className="text-tiny  bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Notify me
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ServiceCard;
