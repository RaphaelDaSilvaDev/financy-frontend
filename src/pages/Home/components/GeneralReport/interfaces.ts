import { ColorsInterface } from "../../../../interfaces/colors";

export interface GeneralReportInterface {
  id: string;
  name: string;
  color: ColorsInterface;
  percentage: string;
  balance: string;
}
