import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./feed/slice";
import postReducer from "./postPage/slice";

const store = configureStore({
  reducer: {
    feed: feedReducer,
    postPage: postReducer,
  },
});

export default store;
