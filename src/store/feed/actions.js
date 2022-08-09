// 1.

import axios from "axios";
import { apiUrl } from "../../config/constants";
import { postsFetched, startLoading } from "./slice";

export const fetchPosts = () => async (dispatch, getState) => {
  try {
    dispatch(startLoading());

    // 1 & 2. Change the API url and make the offset dynamic:
    //
    // To make the offset dynamic, we use getState(), this way
    // we will know the length of the current array of posts
    // and always fetch the ones that come next
    const offset = getState().feed.posts.length;
    const response = await axios.get(
      `${apiUrl}/posts?offset=${offset}&limit=5`
    );
    console.log("Response fetchPosts", response.data.rows);
    dispatch(postsFetched(response.data.rows));
  } catch (e) {
    console.log(e.message);
  }
};
