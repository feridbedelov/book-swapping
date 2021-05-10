import {
  useContext,
  useCallback,
  createContext,
  useEffect,
  useMemo,
} from "react";
import * as auth from "../services/auth.provider";
import { useQueryClient } from "react-query";
import { FullPageSpinner } from "../components/Spinner/FullPageSpinner";
import { useAsync } from "../hooks/useAsync";
import { getCurrentUser } from "../services/user.provider";

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const queryClient = useQueryClient();
  const { data: user, isLoading, isIdle, isSuccess, run, setData } = useAsync();

  useEffect(() => {
    run(getCurrentUser());
  }, [run]);

  const login = useCallback(
    (form) => auth.login(form).then((user) => setData(user)),
    [setData]
  );
  const register = useCallback(
    (form) => auth.register(form).then((user) => setData(user)),
    [setData]
  );
  const logout = useCallback(async () => {
    setData(null);
    await auth.logout();
    queryClient.clear();
  }, [setData, queryClient]);

  const value = useMemo(() => ({ user, login, logout, register }), [
    login,
    logout,
    register,
    user,
  ]);

  if (isLoading || isIdle) {
    return <FullPageSpinner />;
  }

  if (isSuccess) {
    return <AuthContext.Provider value={value} {...props} />;
  }
  return <AuthContext.Provider value={value} {...props} />;
};

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}
