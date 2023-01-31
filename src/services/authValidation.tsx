import { useCookies } from "react-cookie";
import { useJwt } from "react-jwt";
import { Navigate } from "react-router-dom";
import { AuthToken } from "./authToken";

interface AuthValidationProps {
  children: JSX.Element;
}

export function AuthValidation({ children }: AuthValidationProps) {
  const [cookies, setCookies, removeCookies] = useCookies(["user"]);

  const token = cookies.user?.token;
  const { isExpired } = useJwt(token);

  if (isExpired) {
    removeCookies("user");
    AuthToken(undefined);
  }

  if (!cookies.user || isExpired) {
    return <Navigate to="/login" />;
  }

  return children;
}
