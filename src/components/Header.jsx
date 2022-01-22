import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/liked-movies"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Liked Movies</li>
          </NavLink>
        </ul>
      </nav>
      <h1>React Movies</h1>
    </div>
  );
};

export default Header;
