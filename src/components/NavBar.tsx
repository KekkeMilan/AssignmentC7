import '../resources/NavBar.css'; // Import the CSS for styling
import {useAuthStore} from "../hooks/Store.ts";
import {Link} from "react-router-dom";

function Navbar (){

  const {isAuthenticated,logout } = useAuthStore();
  return (
    <nav className="nav">

      <Link className="logo" to="#">
        <img src="src/assets/Logo.png" alt="logo" />
      </Link>

      <div className="group6">
        <ul>

          <li>
            <div className="icons fa fa-home"></div>
            <Link to="/">Home</Link>
          </li>

          <li>
            <div className="icons fa fa-briefcase"></div>
            <Link to="#">Products</Link>
          </li>

          <li>
            <div className="icons fa fa-bars"></div>
            <Link to="#">Content</Link>
          </li>

          <li>
            <div className="icons fa fa-shopping-cart"></div>
            <Link to="#">Orders</Link>
          </li>

          <li>
            <div className="icons fa fa-bars"></div>
            <Link to="#">Reporting</Link>
          </li>

          <li>
            <div className="icons fa fa-gear"></div>
            <Link to="/">Settings</Link>
          </li>

        </ul>
      </div>
      <div className="sign-up-menu">
        <ul>
          <li>
            <div className="icons fa fa-male"></div>
            {isAuthenticated ? (
              <Link to="" onClick={logout}>Logout</Link>
            ) : (
              <Link to="/login">Sign In</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

