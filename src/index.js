import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import Theme from "./style/Theme";
import GlobalStyle from "./style/GlobalStyle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
