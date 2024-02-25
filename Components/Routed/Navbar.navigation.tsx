import React from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "../Shared/AcmeLogo.tsx";
import { usePathname } from "next/navigation";

const NavbarNavigation = (props: any) => {
  return (
    <>
      <Navbar>
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Kyoto</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default NavbarNavigation;
