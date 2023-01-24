import { api } from "../../services/api";

export interface PayloadProps {
  name?: string;
  password?: string;
}

export function UpdateProfile(payload: PayloadProps) {
  const data = api.patch("/user/update", payload);
  return data;
}
