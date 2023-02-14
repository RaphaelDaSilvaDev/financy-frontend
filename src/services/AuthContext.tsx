import { createContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import { AuthToken } from "./authToken";

interface AuthContextProps {
  user: UserProps;
  setCookies: (name: "user", value: any) => void;
  handleOnSignOut(): JSX.Element | undefined;
}

export const AuthContext = createContext({} as AuthContextProps);

interface AuthProviderProps {
  children: React.ReactNode;
}

interface UserProps {
  token: string;
  user: {
    avatar_url: string;
    born: string;
    email: string;
    gender: string;
    id: string;
    name: string;
  };
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [cookies, setCookies, removeCookies] = useCookies(["user"]);

  const user: UserProps = cookies.user;

  function handleOnSignOut() {
    try {
      removeCookies("user");
      AuthToken(undefined);
      return <Navigate to="/login" />;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setCookies,
        handleOnSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
