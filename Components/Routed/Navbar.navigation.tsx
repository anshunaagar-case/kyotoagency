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
  Input,
  NavbarMenuItem,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { AcmeLogo } from "../Shared/AcmeLogo.tsx";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "../Shared/Component/ThemeSwitcher.theme.tsx";
import ServiceCard from "../Shared/Component/OnClickServiceComponent/Card.service.tsx";

const OnclickServiceComponent = (props: any) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const serviceObject = [
    {
      serviceName: "Video editing",
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
        aria-label="services"
        size="5xl"
        backdrop="blur"
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
                {serviceObject.map((items: any) => {
                  return (
                    <div>
                      <ServiceCard heading={items.serviceName} />
                    </div>
                  );
                })}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
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
