import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Routes from "Routes";

// Global Style
import GlobalStyle from "Styles/GlobalStyle";

ReactDOM.render(
  <Fragment>
    <Routes />
    <GlobalStyle />
  </Fragment>,
  document.getElementById("root")
);
