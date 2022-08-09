import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  posts: [],
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },

    // in this case we assume that action.payload is going to be an array of posts,
    // it's always good to double check once you get the data
    postsFetched: (state, action) => {
      console.log("postFetched action", action); // to see what data is coming from the thunk [{}, {}, {}]
      state.posts = [...action.payload]; // get our list of posts from the action payload
      state.loading = false;
    },
  },
});

export const { startLoading, postsFetched } = feedSlice.actions;
export default feedSlice.reducer;
