import { ColorsInterface } from "../../../../interfaces/colors";

export interface GoalInterface {
  id: string;
  user_id: string;
  name: string;
  income_type: string;
  income_value: string;
  end_by: string;
  end_by_value: string;
  finished: boolean;
  color: ColorsInterface;
  created_at: string;
  updated_at: string;
  balance: number;
}
