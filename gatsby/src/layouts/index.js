import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme.js";
import { default as BasicContainer } from "components/Layout/Container";
import MainMenu from "components/Menu/MainMenu";
import Footer from "components/Footer";

import "./index.css";
// Import the prismjs theme for syntax highlighting in markdown
import "prismjs/themes/prism-coy.css";
import baseStyles from "styles/index";

const Wrapper = styled.div`
  height: 100%;
`;

const Container = BasicContainer.extend`
  min-height: 100%;
`;

const Layout = props => {
  baseStyles();
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <MainMenu />
        <Container>
          <div>{props.children()}</div>
        </Container>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
