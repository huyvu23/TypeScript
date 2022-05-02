import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movie/movieSlice";
import userSlice from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userSlice,
  },
});

export default store;
