import { api } from "../../../../services/api";

export function GetAllGoalsService() {
  const response = api.get("goal");

  return response;
}
