import { useState } from "react";
import Auth from "../components/Authentication";

export default function UnAuthPage() {
  const [authType, setAuthType] = useState("login");

  const onLoginSubmit = (values) => {
    console.log(values, "login");
  };

  const onRegisterSubmit = (values) => {
    console.log(values, "register");
  };

  return authType === "login" ? (
    <Auth authType="login" onSubmit={onLoginSubmit} setAuthType={setAuthType} />
  ) : (
    <Auth
      authType="register"
      onSubmit={onRegisterSubmit}
      setAuthType={setAuthType}
    />
  );
}
