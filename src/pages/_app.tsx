import { AppProps } from "next/app";

import Container from "components/Container";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Container>
    <Component {...pageProps} />
  </Container>
);

export default MyApp;
