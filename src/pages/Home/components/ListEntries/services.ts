import { api } from "../../../../services/api";

export async function GetEntriesService() {
  const data = await api.get("/entry");

  return data;
}

export async function GetGoalEntriesService(id: string) {
  const data = await api.get(`/entry/${id}`);

  return data;
}

export async function RemoveEntryService(id: string) {
  const data = await api.delete(`entry/${id}`);

  return data;
}

export async function RemoveEntryGoalService(id: string) {
  const data = await api.delete(`entry/goal/${id}`);

  return data;
}
