import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import NavbarNavigation from "../../Components/Routed/Navbar.navigation";
import DevelopmentAlertBanner from "../../Components/Shared/Component/Banner.dev.tsx";
import { Inter } from "next/font/google";
import useMousePointerCoordinates from "@/utils/UseMousePosition.mouseDom.tsx";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const CursorableMouse = () => {
  const { xCoordinate, yCoordinate } = useMousePointerCoordinates();
  const maskSize = 50;
  return (
    <>
      <motion.div
        animate={{
          WebkitMaskPosition: `${xCoordinate - maskSize / 4}px ${
            yCoordinate - maskSize / 4
          }px`,
          transition: {
            type: "tween",
            duration: 0.25,
          },
        }}
        className="maskClipper"
      >
        jack
      </motion.div>
    </>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  const navbarLinkObject = [
    { link: "/", name: "Home" },
    { link: "/", name: "About us" },
    { link: "/", name: "Features" },
    { link: "/", name: "Projects" },
  ];
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <NextUIProvider>
        <div className="development-informative-section">
          <DevelopmentAlertBanner />
        </div>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CursorableMouse />
          <NavbarNavigation navigationLinks={navbarLinkObject} />
          <Component {...pageProps} />
        </ThemeProvider>
      </NextUIProvider>
    </>
  );
}
