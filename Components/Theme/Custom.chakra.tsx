import { extendTheme } from "@chakra-ui/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const defaultCustomExtendTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "inherit",
        color: "white",
      },
    },
  },
  fonts: {
    body: inter.style.fontFamily,
  },
});

export default defaultCustomExtendTheme;
