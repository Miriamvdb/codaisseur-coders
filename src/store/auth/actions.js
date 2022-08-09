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

export const bootstrapLoginState = () => async (dispatch, getState) => {
  try {
    // 1. Checks whether an access token exists in local storage.
    // It might exist, if the user was previously logged in and refreshes the page
    const token = localStorage.getItem("token");

    // 2. If so, make a GET API request to /me to get the user's profile, sending along the access token.
    // If the user opens up the webpage after having been offline for a long time, the access token mgiht have expired.
    if (!token) return;

    const response = await axios.get(`${apiUrl}/me`, {
      headers: { authorization: `Bearer ${token}` },
    });

    // 3. If the profile request succeeds, the thunk dispatches the userLoggedIn action
    dispatch(userLoggedIn({ accessToken: token, user: response.data }));
  } catch (e) {
    console.log(e.message);
  }
};
