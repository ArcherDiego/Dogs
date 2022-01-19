import React from "react";
import GlobalStyle from "./theme/GlobalStyle"
import Router from "./pages/Router/Router";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
