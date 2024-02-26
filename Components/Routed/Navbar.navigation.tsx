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
} from "@nextui-org/react";
import { AcmeLogo } from "../Shared/AcmeLogo.tsx";
import { usePathname } from "next/navigation";

const OnclickServiceComponent = () => {
  return (
    <>
    
    </>
  );
};

const ResponsiveNavbarToggle = (props: any) => {
  return (
    <>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={props.isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarMenu className="z-100">
        {props.navigationLinks.map((item: any) => {
          return (
            <NavbarItem
              key={item.name}
              className={`${
                usePathname() === item.link ? "navLinkActive" : ""
              }`}
            >
              <Link href={item.link}>{item.name}</Link>
            </NavbarItem>
          );
        })}
        <NavbarItem className="servicesComponent">
          <OnclickServiceComponent />
        </NavbarItem>
      </NavbarMenu>
    </>
  );
};

const NavbarNavigation = (props: any) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <>
      <Navbar className="" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
        <ResponsiveNavbarToggle
          navigationLinks={props.navigationLinks}
          isMenuOpen={isMenuOpen}
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Kyoto</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {props.navigationLinks.map((item: any) => {
            return (
              <NavbarItem
                key={item.name}
                className={`${usePathname() === item.link ? "" : ""}`}
              >
                <Link href={item.link} className="navLinkActive">
                  {item.name}
                </Link>
              </NavbarItem>
            );
          })}

          <NavbarItem className="servicesComponent">
            <OnclickServiceComponent />
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link
              href="#"
              className="font-semibold text-inherit text-purple-700"
            >
              Login
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="secondary"
              suppressContentEditableWarning
              suppressHydrationWarning
              href="#"
              variant="flat"
            >
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default NavbarNavigation;
