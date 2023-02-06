import { api } from "../../../../services/api";

export function GetAllGoalsService() {
  const response = api.get("goal");

  return response;
}

export function RemoveGoalService(id: string) {
  const response = api.delete(`goal/${id}`);

  return response;
}
