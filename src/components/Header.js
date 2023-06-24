import { NavLink } from "react-router-dom";

function Header() {
    return (
      <div className="header">
        <span>Header Component</span>
        <ul>
        <NavLink to="/">About</NavLink>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
        <ul>
        </ul>
      </div>
    );
}
export default Header