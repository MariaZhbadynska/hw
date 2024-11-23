import { NavLink } from "react-router-dom";
import "./Nav.css";

const setActiveMenuLink = ({ isActive }) =>
  isActive ? "menu-active-link" : "";
export default function Nav() {
  return (
    <nav>
      <NavLink className={setActiveMenuLink} to="/">
        Home
      </NavLink>

      <NavLink className={setActiveMenuLink} to="/inbox">
        Inbox
      </NavLink>
    </nav>
  );
}
