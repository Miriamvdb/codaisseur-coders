import axios from "axios";
import { apiUrl } from "../../config/constants";
import { startLoadingPost, postFullyFetched } from "./slice";

// Note that "fetchPostDetails" it not actually itself a thunk, but a thunk creator: it's a function that,
// given an id, creates a thunk function. This completes our little game of "Redux indirection concepts bingo":
//
// - action > an object with type + payload properties
// - action creator > function that we use to make actions (the slice creates them for us)
// - thunk action > callback function that receives dispatch + getState, and then orchestates other actions
// - thunk action creator > function that we use to make thunk actions

export const fetchPostDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(startLoadingPost());
    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`${apiUrl}/posts/${id}`),
      axios.get(`${apiUrl}/posts/${id}/comments`),
    ]);
    console.log(
      "Response fetchPosts",
      postResponse.data,
      commentsResponse.data
    );
    dispatch(
      postFullyFetched({
        post: postResponse.data,
        comments: commentsResponse.data,
      })
    );
  } catch (e) {
    console.log(e.message);
  }
};
