import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/Auth.context";
import "./index.scss";
export const Sidebar = () => {
  const { logout } = useAuthContext();

  return (
    <div className="nav-wrapper">
      <div className="logo">Aurora</div>
      <nav className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/my-books">My books</Link>
          </li>
        </ul>
      </nav>
      <div onClick={logout} className="logoutBtn">
        Logout
      </div>
    </div>
  );
};
