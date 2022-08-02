import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme";
import ResetCSS from "common/assets/css/style";
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
  GradientWrapper,
} from "containers/app.style";

const MainWrapper = ({ children, hideAuth }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>Aut</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <meta property="og:title" content="Aut" />
          <meta
            name="description"
            content="Do more with your DAO 👥. Āut is an expandable Protocol for Role-based Membership & Governance in Web3 Communities."
          />
          <meta
            property="og:description"
            content="Do more with your DAO 👥. Āut is an expandable Protocol for Role-based Membership & Governance in Web3 Communities."
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          <ContentWrapper>{children}</ContentWrapper>
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default MainWrapper;
