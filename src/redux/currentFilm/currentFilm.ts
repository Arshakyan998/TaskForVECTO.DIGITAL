import { iInitalState } from "./currentFilm.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { baseDate } from "../../globalTypes/date";

export const currentFilm = createSlice({
  name: "CHANGE/CURRENTFILM",
  initialState: {
    currentFilm: {},
  } as iInitalState,

  reducers: {
    getCurrentFilm: (
      state: iInitalState,
      action: PayloadAction<baseDate<string, any, number>>
    ) => {
      state.currentFilm = action.payload;
    },
  },
});
