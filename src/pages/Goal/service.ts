import { api } from "../../services/api";

interface CreateGoalProps {
  color: string;
  end_by: string;
  end_by_value: number;
  income_type: string;
  income_value: string;
  name: string;
  finished?: boolean;
}

export async function CreateGoalService({
  color,
  end_by,
  end_by_value,
  income_type,
  income_value,
  name,
}: CreateGoalProps) {
  const params = {
    color,
    end_by,
    end_by_value: end_by === "indeterminate" ? "0" : end_by_value,
    income_type,
    income_value: Number(income_value),
    name,
  };

  const data = await api.post("/goal", params);

  return data;
}

export async function EditGoalService(
  { color, end_by, end_by_value, income_type, income_value, name, finished }: CreateGoalProps,
  id: string
) {
  const params = {
    color,
    end_by,
    end_by_value: end_by === "indeterminate" ? "0" : end_by_value,
    income_type,
    income_value: Number(income_value),
    name,
    finished,
  };

  const data = await api.patch(`/goal/${id}`, params);

  return data;
}

export async function GetGoalToEdit(goal_id: string) {
  const data = await api.get(`/goal/${goal_id}`);

  return data;
}

export async function GetAvailablePercentageService() {
  const data = await api.get("/goal/available-percentage");

  return data;
}
