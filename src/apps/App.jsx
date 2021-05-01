import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthApp from "./AuthApp";
import UnAuthApp from "./UnAuthApp";

const App = () => {
  const user = "ferid";

  return user ? (
    <BrowserRouter>
      <AuthApp />
    </BrowserRouter>
  ) : (
    <UnAuthApp />
  );
};

export default App;
