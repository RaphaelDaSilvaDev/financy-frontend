import { api } from "../../services/api";

interface AuthenticationProps {
  email: string;
  password: string;
}

export async function AuthenticationApi({ email, password }: AuthenticationProps) {
  const params = {
    email,
    password,
  };

  const data = await api.post("/user/session", params);

  return data;
}
