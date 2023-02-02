import { api } from "../../../../services/api";

export async function GetGeneralReportService() {
  const data = await api.get("/goal/general-report");

  return data;
}
