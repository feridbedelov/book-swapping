import { useAuthContext } from "../../contexts/Auth.context";
import { Redirect, Route } from "react-router-dom";

export function RedirectToHome({ component: Component, ...rest }) {
  const { user } = useAuthContext();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          );
        }
      }}
    />
  );
}
