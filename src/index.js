import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Routes from "Routes";

// Global Style
import GlobalStyle from "Styles/GlobalStyle";

// Theme
import { ThemeProvider } from "styled-components";
import theme from "Styles/Theme";

ReactDOM.render(
  <Fragment>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
    <GlobalStyle />
  </Fragment>,
  document.getElementById("root")
);
