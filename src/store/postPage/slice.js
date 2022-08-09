import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  post: null,
  comments: [],
};

export const postPageSlice = createSlice({
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

export const { startLoadingPost, postFullyFetched } = postPageSlice.actions;
export default postPageSlice.reducer;
