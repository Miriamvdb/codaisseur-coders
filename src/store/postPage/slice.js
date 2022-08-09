import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  post: null,
  comments: [],
};

export const postSlice = createSlice({
  name: "postPage",
  initialState,
  reducers: {
    startLoadingPost: (state) => {
      state.loading = true;
    },

    postFullyFetched: (state, action) => {
      console.log("postFullyFetched", action);
      state.post = action.payload.post;
      state.comments = action.payload.comments;
      state.loading = false;
    },
  },
});

export const { startLoadingPost, postFullyFetched } = postSlice.actions;
export default postSlice.reducer;
