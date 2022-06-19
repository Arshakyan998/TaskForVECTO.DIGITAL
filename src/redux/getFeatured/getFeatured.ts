import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { date, iInitalState } from "./getFeaturedtypes";
import getDateAsync from "./getFeaturedAsync";
import { baseDate } from "../../globalTypes/date";

export const getFuture = createSlice({
  name: "GET/FUTURE",
  initialState: {
    featured: {},
    isLoading: true,
    error: "",
  } as iInitalState,
  reducers: {},
  extraReducers: {
    [getDateAsync.fulfilled.type]: (
      state,
      action: PayloadAction<baseDate<string, date, number>>
    ) => {
      state.featured = action.payload;
      state.isLoading = false;
    },
    [getDateAsync.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getDateAsync.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});
