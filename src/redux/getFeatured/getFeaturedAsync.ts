import { currentFilm } from "./../currentFilm/currentFilm";
import { date as dateType } from "./getFeaturedtypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { serviceWorker } from "../../service.worker";

export default createAsyncThunk("GET/FEATURED", async (_, ThunkAPI) => {
  try {
    const response = await serviceWorker.get("/Featured");
    const date = await response.data;
    ThunkAPI.dispatch(currentFilm.actions.getCurrentFilm(date));
    return ThunkAPI.fulfillWithValue(date);
  } catch (error) {
    return ThunkAPI.rejectWithValue("First Make sure to activate the server with npm run server");
  }
});
