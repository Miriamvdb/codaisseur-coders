import axios from "axios";
import { apiUrl } from "../../config/constants";
import { startLoadingAuth, userLoggedIn } from "./slice";

export const login = (email, password) => async (dispatch, getState) => {
  try {
    dispatch(startLoadingAuth());
    // make a POST API request to /login to get an access token
    const response = await axios.post(`${apiUrl}/login`, {
      email,
      password,
    });

    const { jwt } = response.data;
    console.log(response.data);

    // make a GET API request to /me to get the users profile
    // sending along the access token we just got
    const profileResponse = await axios.get(`${apiUrl}/me`, {
      headers: { authorization: `Bearer ${jwt}` },
    });
    // to persist the user's session
    localStorage.setItem("token", jwt);
    // dispatch an action that saves the token and the user's profile
    // write a new userLoggedIn case in auth slice reducer for this
    dispatch(userLoggedIn({ accessToken: jwt, user: profileResponse }));
  } catch (e) {
    console.log("Error at login", e.message);
  }
};
