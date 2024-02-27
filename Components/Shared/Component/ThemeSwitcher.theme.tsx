import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Dropdown className="overflow-hidden">
        <DropdownTrigger>
          <Button isIconOnly variant="faded">
            {theme === "dark" ? (
              <HiOutlineSun className="text-xl" />
            ) : (
              <HiOutlineSun className="text-xl" />
            )}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          variant="flat"
          aria-label="Dropdown menu with shortcut"
          disabledKeys={`${theme === "dark" ? "darkmode" : "lightmode"}`}
        >
          <DropdownItem key="darkmode">
            <Button
              variant="shadow"
              onClick={() => setTheme("dark")}
              suppressHydrationWarning
              className="aligh-right text-right h-auto p-0 bg-transparent"
            >
                Dark Mode
              <HiOutlineMoon className="text-xl" />
            </Button>
          </DropdownItem>
          <DropdownItem key="lightmode">
            <Button
              variant="shadow"
              onClick={() => setTheme("light")}
              suppressHydrationWarning
              className="aligh-right flex-row text-right h-auto p-0 bg-transparent"
            >
              Light Mode
              <HiOutlineSun className="text-xl text-right" />
            </Button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
