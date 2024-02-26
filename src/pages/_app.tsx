import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import NavbarNavigation from "../../Components/Routed/Navbar.navigation";
import DevelopmentAlertBanner from "../../Components/Shared/Component/Banner.dev.tsx";

import {Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const navbarLinkObject = [
    { link: "/", name: "Features" },
    { link: "/", name: "Customers" },
    { link: "/", name: "Integrations" },
  ];
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <div className="development-informative-section">
        <DevelopmentAlertBanner />
      </div>
      <NextUIProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavbarNavigation navigationLinks={navbarLinkObject} />
          <Component {...pageProps} />
        </ThemeProvider>
      </NextUIProvider>
    </>
  );
}
