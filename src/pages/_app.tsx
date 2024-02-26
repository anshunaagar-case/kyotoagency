import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import NavbarNavigation from "../../Components/Routed/Navbar.navigation";
import defaultCustomExtendTheme from "../../Components/Theme/Custom.chakra.tsx";
import DevelopmentAlertBanner from "../../Components/Shared/Component/Banner.dev.tsx";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  const navbarLinkObject = [
    { link: "/", name: "Features" },
    { link: "/", name: "Customers" },
    { link: "/", name: "Integrations" },
    { link: "/", name: "Services ⭐" },
  ];
  return (
    <>
      <NextUIProvider>
        <div className="development-informative-section">
          <DevelopmentAlertBanner />
        </div>
        <ChakraProvider theme={defaultCustomExtendTheme}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <NavbarNavigation navigationLinks={navbarLinkObject} />
            <Component {...pageProps} />
          </ThemeProvider>
        </ChakraProvider>
      </NextUIProvider>
    </>
  );
}
