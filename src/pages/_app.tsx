import NavbarNavigation from "../../Components/Routed/Navbar.navigation";
import DevelopmentAlertBanner from "../../Components/Shared/Component/Banner.dev.tsx";
import useMousePointerCoordinates from "@/utils/UseMousePosition.mouseDom.tsx";
// import useMousePointerCondition from "@/utils/UseMousePointerCondition.mouseDom.tsx";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import "@/styles/globals.css";
import { Playfair_Display_SC } from "next/font/google";

const card_inertial_ = Playfair_Display_SC({ weight: "400", subsets: ["latin"] });

const inter = Inter({ subsets: ["latin"] });

const CursorableMouse = () => {
  const { xCoordinate, yCoordinate } = useMousePointerCoordinates();
  // const {pointerCondition} = useMousePointerCondition()
  const maskSize = 50;
  return (
    <>
      <motion.div
        animate={{
          WebkitMaskPosition: `${xCoordinate - maskSize / 4}px ${
            yCoordinate - maskSize / 4
          }px`,
          transition: {
            type: "spring",
            duration: 0.25,
          },
        }}
        className="maskClipper max-[800px]:hidden"
      >
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
        }; 
        card_view_font {
          font-family: ${card_inertial_.style.fontFamily};
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
