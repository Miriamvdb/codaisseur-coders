import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  posts: [],
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducer: {
    startLoading: (state) => {
      state.loading = true;
    },
    postsFetched: (state, action) => {
      console.log("postFetched action", action); // to see what data is coming from the thunk
      state.posts = [...action.payload]; // get our list of posts from the action payload
      state.loading = false;
    },
  },
});

export const { startLoading, postsFetched } = feedSlice.actions;
export default feedSlice.reducer;
