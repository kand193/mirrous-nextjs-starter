import { AppProps } from "next/app";
import React, { FC } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import Container from "components/Container";
import defaultTheme from "utils/style/theme";

const GlobalStyle = createGlobalStyle`
html,
body {
  margin: 0;
  padding: 0;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    Fira Sans,
    Droid Sans,
    Helvetica Neue,
    sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Container>
      <Component {...pageProps} />
    </Container>
  </ThemeProvider>
);

export default MyApp;
