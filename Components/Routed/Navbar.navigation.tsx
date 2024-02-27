import React from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  Image,
  ModalHeader,
  Card,
  CardFooter,
} from "@nextui-org/react";
import { AcmeLogo } from "../Shared/AcmeLogo.tsx";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "../Shared/Component/ThemeSwitcher.theme.tsx";
import ServiceCard from "../Shared/Component/OnClickServiceComponent/Card.service.tsx";

const OnclickServiceComponent = (props: any) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const serviceObject = [
    {
      serviceName: "Web development",
      serviceImage: "/infographics/web-dev.png",
    },
    {
      serviceName: "Video Editing",
      serviceImage: "/infographics/video-editing.png",
    },
    {
      serviceName: "Photo editing",
      serviceImage: "/infographics/photo-editing.png",
    },
  ];
  return (
    <>
      <Button
        onClick={onOpen}
        className={props.customHeadStyles}
        color={props.color}
        variant={props.variant}
      >
        Services we offer ⭐
      </Button>
      <Modal
        scrollBehavior="outside"
        aria-label="services"
        size="full"
        backdrop="blur"
        className="max-[980px]:bg-inherit max-[980px]:shadow-none"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeIn",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeOut",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Our services
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-row justify-evenly max-[980px]:flex-col max-[980px]:grid max-[980px]:grid-cols-1 max-[980px]:m-auto">
                  {serviceObject.map((items: any) => {
                    return (
                      <div className="mx-3 max-[980px]:my-2 hover:rotate-6 pointer-events-auto cursor-pointer">
                        <ServiceCard serviceImage={items.serviceImage} />
                      </div>
                    );
                  })}
                  <div>
                    <Card
                      isFooterBlurred={true}
                      className="max-[1280px]:hidden"
                      radius="lg"
                      shadow="lg"
                    >
                      <Image
                        className="object-cover"
                        src="/infographics/image-random.png"
                      />
                      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-tiny">Available soon.</p>
                        <Button>Read more</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

const ResponsiveNavbarToggle = (props: any) => {
  return (
    <>
      <NavbarMenu>
        <NavbarMenuItem>
          <div className="items-center">
            <OnclickServiceComponent
              color="secondary"
              variant="ghost"
              customHeadStyles={"w-full"}
              key={1}
            />
            <Button className="w-full my-5 bg-white text-black border-collapse border">
              Wanna connect with us?
            </Button>
            {props.navigationLinks.map((item: any) => {
              return (
                <>
                  <NavbarItem key={item.name} className="p-4 underlinedRuler">
                    <Link href={item.link}>{item.name}</Link>
                  </NavbarItem>
                </>
              );
            })}
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </>
  );
};

const NavbarNavigation = (props: any) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <>
      <Navbar>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="min-[720px]:hidden mx-3"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>

        <NavbarContent
          className="flex max-[720px]:hidden gap-4"
          justify="center"
        >
          {props.navigationLinks.map((item: any) => {
            return (
              <>
                <NavbarItem key={item.name}>
                  <Link href={item.link}>{item.name}</Link>
                </NavbarItem>
              </>
            );
          })}
          <OnclickServiceComponent
            customHeadStyles={"w-auto"}
            color="secondary"
            variant="shadow"
          />
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="flex">
            <div className="mx-3">
              <ThemeSwitcher />
            </div>
            <Button as={Link} color="secondary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        <ResponsiveNavbarToggle navigationLinks={props.navigationLinks} />
      </Navbar>
    </>
  );
};

export default NavbarNavigation;
