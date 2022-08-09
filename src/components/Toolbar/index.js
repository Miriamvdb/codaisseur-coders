import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUserProfile } from "../../store/auth/selectors";
import { logOut } from "../../store/auth/slice";
import "./styles.css";

const Toolbar = () => {
  const user = useSelector(selectUserProfile);
  const dispatch = useDispatch();

  return (
    <div className="container-toolbar">
      <NavLink to="/" className="link-toolbar">
        <h1>Codaisseur Coders</h1>
      </NavLink>
      <div className="links-toolbar">
        <NavLink
          to="/"
          className="link-toolbar"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold", color: "tomato" } : undefined
          }
        >
          Home
        </NavLink>
        {user ? (
          <>
            <button onClick={() => dispatch(logOut())}>Logout</button>
            <p>
              Welcome, <b>{user.data.name}</b>
            </p>
          </>
        ) : (
          <NavLink
            to="/login"
            className="link-toolbar"
            style={({ isActive }) =>
              isActive ? { fontWeight: "bold", color: "tomato" } : undefined
            }
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export { Toolbar };
