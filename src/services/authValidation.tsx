import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

interface AuthValidationProps {
  children: JSX.Element;
}

export function AuthValidation({ children }: AuthValidationProps) {
  const [cookies] = useCookies(["user"]);

  if (!cookies.user) {
    return <Navigate to="/login" />;
  }

  return children;
}
