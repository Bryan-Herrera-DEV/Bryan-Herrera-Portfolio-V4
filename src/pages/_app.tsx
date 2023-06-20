import type { AppProps } from "next/app";
import "@/styles/globals.scss";
import BackgroundComponent from "@/components/Background";
import { NavBarComponent } from "@/components/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BackgroundComponent
      navComponent={<NavBarComponent />}
    >
      <Component {...pageProps} />
    </BackgroundComponent>
  );
}
