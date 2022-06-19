import { date as dateType } from "./getDate.types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { serviceWorker } from "../../service.worker";

export default createAsyncThunk("GET/FILMS", async (_, ThunkAPI) => {
  try {
    const response = await serviceWorker.get<dateType>("/TendingNow");

    const date = await response.data;

    return ThunkAPI.fulfillWithValue(date);
  } catch (error) {
    return ThunkAPI.rejectWithValue("First Make sure to activate the server with npm run server");
  }
});
 