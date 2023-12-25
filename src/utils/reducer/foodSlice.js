import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  foods: [],
  isLoading: false,
  error: null,
};

export const fetchFood = createAsyncThunk("food/fetchFood", async () => {
  const res = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  );
  const data = await res.data.meals;
  return data;
});

const foodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFood.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFood.fulfilled, (state, action) => {
      state.isLoading = false;
      state.foods = action.payload;
    });
    builder.addCase(fetchFood.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default foodSlice.reducer;
