import { api } from "../../../../services/api";

interface AddEntryServiceProps {
  income: number;
  outcome: number;
}

export async function AddEntryService({ income, outcome }: AddEntryServiceProps) {
  const params = { income, outcome };

  const data = await api.post("/entry", params);

  return data;
}
