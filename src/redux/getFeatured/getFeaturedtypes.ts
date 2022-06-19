import { baseDate } from "../../globalTypes/date";

export type date = baseDate<string, date, number>[];

export interface iInitalState {
  featured: baseDate<string, date, number>;
  isLoading: boolean;
  error: string;
}
