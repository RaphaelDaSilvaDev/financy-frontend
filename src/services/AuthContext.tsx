import { createContext } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import { AuthToken } from "./authToken";

interface AuthContextProps {
  user: UserProps;
  setCookies: (name: "user", value: any) => void;
  handleOnSignin(): JSX.Element | undefined;
}

export const AuthContext = createContext({} as AuthContextProps);

interface AuthProviderProps {
  children: React.ReactNode;
}

interface UserProps {
  token: string;
  user: {
    name: string;
    email: string;
    isAdmin: boolean;
  };
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [cookies, setCookies, removeCookies] = useCookies(["user"]);

  const user: UserProps = cookies.user;

  function handleOnSignin() {
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
        handleOnSignin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
