import { api } from "./api";

export function AuthToken(token: string | undefined) {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    api.defaults.headers.common["Authorization"];
  }
}
