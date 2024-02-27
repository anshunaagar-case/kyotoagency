import React from "react";
import { Card, CardFooter, CardHeader, Button, Image } from "@nextui-org/react";

const ServiceCard = (props: any) => {
  return (
    <>
      {/* enter tailwind height and width only */}
      <Card
        className={`w-[300px] h-[300px] border-none`}
        isFooterBlurred
        radius="lg"
        shadow="lg"
      >
        <CardHeader>{props.heading}</CardHeader>
        <Image
          alt="Woman listing to music"
          className="object-cover"
          src="https://www.marshallheadphones.com/on/demandware.static/-/Sites-zs-master-catalog/default/dw23d08e4c/images/marshall/headphones/major-iv/high-res/pos-marshall-major-iv-black-01.png"
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
