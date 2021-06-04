import { useAuthContext } from "../contexts/Auth.context";
import { Redirect } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

export function Logout() {
  const { logout } = useAuthContext();
  const [loading, setLoading] = useState(true);

  const onLogout = useCallback(async () => {
    await logout();
    setLoading(false);
  }, [logout]);

  useEffect(() => {
    onLogout();
  }, [onLogout]);

  if (loading) return <h1>You are redirecting to the login page</h1>;

  return !loading && <Redirect to="/login" />;
}
