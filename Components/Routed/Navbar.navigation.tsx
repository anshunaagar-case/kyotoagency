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
} from "@nextui-org/react";
import { AcmeLogo } from "../Shared/AcmeLogo.tsx";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "../Shared/Component/ThemeSwitcher.theme.tsx";

const OnclickServiceComponent = (props: any) => {
  return (
    <>
      <Button
        className={props.customHeadStyles}
        color="secondary"
        variant="faded"
      >
        Services we offer ⭐
      </Button>
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
              customHeadStyles={"w-full text-white"}
              key={1}
            />
            <Button className="w-full my-5 bg-white">
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
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="flex">
            <div className="mx-3">
              <ThemeSwitcher />
            </div>
            <Button as={Link} color="primary" href="#" variant="flat">
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
