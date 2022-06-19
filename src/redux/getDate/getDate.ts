import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { date, iInitalState } from "./getDate.types";
import getDateAsync from "./getDateAsync";

export const getDate = createSlice({
  name: "GET/DATE",
  initialState: {
    date: [],
    isLoading: true,
    error: "",
  } as iInitalState,
  reducers: {},
  extraReducers: {
    [getDateAsync.fulfilled.type]: (state, action: PayloadAction<date>) => {
      state.date = action.payload;
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
