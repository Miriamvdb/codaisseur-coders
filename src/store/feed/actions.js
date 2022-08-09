// 1.

import axios from "axios";
import { apiUrl } from "../../config/constants";
import { postsFetched, startLoading } from "./slice";

export const fetchPosts = () => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const response = await axios.get(`${apiUrl}/posts`);
    console.log("Response fetchPosts", response.data.rows);
    dispatch(postsFetched(response.data.rows));
  } catch (e) {
    console.log(e.message);
  }
};
