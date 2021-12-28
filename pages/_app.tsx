import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { NextUIProvider } from "@nextui-org/react";
import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </NextUIProvider>
  );
}

export default MyApp;
