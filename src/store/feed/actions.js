import axios from "axios";
import { apiUrl } from "../../config/constants";
import { createNewPostSuccess, postsFetched, startLoading } from "./slice";

export const fetchPosts = () => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
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

// Step???
export const createPostAction =
  (title, content) => async (dispatch, getState) => {
    try {
      const token = getState().auth.accessToken;
      console.log(token);
      const createPostResponse = await axios.post(
        `${apiUrl}/posts`,
        {
          title,
          content,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(createNewPostSuccess(createPostResponse.data));
    } catch (e) {
      console.log(e.message);
    }
  };
