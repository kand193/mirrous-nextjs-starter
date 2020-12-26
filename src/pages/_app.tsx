import { AppProps } from "next/app";

import Conatiner from "@/components/Container";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Conatiner>
      <Component {...pageProps} />
    </Conatiner>
  );
};

export default MyApp;
