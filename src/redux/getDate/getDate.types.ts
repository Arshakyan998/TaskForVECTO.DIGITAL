import { baseDate } from "../../globalTypes/date";

export type date = baseDate<string, date, number>[];

export interface iInitalState {
  date: date;
  isLoading: boolean;
  error: string;
}
