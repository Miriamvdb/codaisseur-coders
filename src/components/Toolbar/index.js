import { NavLink } from "react-router-dom";
import "./styles.css";

const Toolbar = () => {
  return (
    <div className="container-toolbar">
      <div>
        <NavLink
          to="/"
          className="link-toolbar"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold", color: "tomato" } : undefined
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/login"
          className="link-toolbar"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold", color: "tomato" } : undefined
          }
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export { Toolbar };
