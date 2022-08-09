import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../../store/auth/actions";
import "./styles.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitLogin = (event) => {
    event.preventDefault();
    console.log("You're logged in :)", email);
    dispatch(login(email, password));
    navigate("/");
  };

  return (
    <div className="container-login">
      <NavLink className="link-postpage" to="/">
        Back
      </NavLink>
      <h1>Login</h1>
      <form onSubmit={submitLogin}>
        <input
          className="input-login"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />
        <input
          className="input-login"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export { LoginPage };
