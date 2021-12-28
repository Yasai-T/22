import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </NextUIProvider>
  );
}

export default MyApp;
