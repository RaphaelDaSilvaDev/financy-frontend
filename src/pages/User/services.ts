import { api } from "../../services/api";

export interface PayloadProps {
  name?: string;
  password?: string;
  born?: string;
  gender?: string;
  avatar?: File;
}

export function UpdateProfile(payload: PayloadProps) {
  const data = api.patch("/user/update", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
}
