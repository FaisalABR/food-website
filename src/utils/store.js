import { configureStore } from "@reduxjs/toolkit";
import foodSlice from "./reducer/foodSlice";

export default configureStore({
  reducer: {
    food: foodSlice,
  },
});
