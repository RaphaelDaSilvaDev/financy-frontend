import { api } from "../../../../services/api";

export async function GetEntriesService() {
  const data = await api.get("/entry");

  return data;
}

export async function GetGoalEntriesService(id: string) {
  const data = await api.get(`/entry/${id}`);

  return data;
}
