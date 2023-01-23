import { api } from "../../services/api";

interface SigninProps {
  name: string;
  email: string;
  password: string;
}

export async function SigninApi({ email, name, password }: SigninProps) {
  const params = {
    email,
    name,
    password,
  };

  const data = await api.post("/user", params);

  return data;
}
