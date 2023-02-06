import { api } from "../../../../../../services/api";

export async function GetGraphDetailsService(goal_id?: string) {
  const data = await api.get(`entry/graph/${goal_id ? goal_id : ""}`);

  return data;
}
