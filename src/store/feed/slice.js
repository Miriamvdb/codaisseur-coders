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

    // 3. Modify the case to accommodate more posts. First copy the
    // posts that are currently in the state, then add the new ones.
    postsFetched: (state, action) => {
      state.posts = [...state.posts, ...action.payload];
      state.loading = false;
    },
  },
});

export const { startLoading, postsFetched } = feedSlice.actions;
export default feedSlice.reducer;
