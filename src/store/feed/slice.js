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

    postsFetched: (state, action) => {
      state.posts = [...state.posts, ...action.payload];
      state.loading = false;
    },

    // 1. Add a new case
    createNewPostSuccess: (state, action) => {
      console.log("New post slice", action);
      // 5. Logic to add the new post to "posts"
      // Remember the parameter you passed in to the action
      // is available as action.payload in the reducer.
      // const { title, content } = action.payload;
      // const newPost = {
      //   id: Math.floor(Math.random() * 1000),
      //   title,
      //   content,
      // };
      state.posts.push(action.payload);
    },
  },
});

export const { startLoading, postsFetched, createNewPostSuccess } =
  feedSlice.actions;
export default feedSlice.reducer;
