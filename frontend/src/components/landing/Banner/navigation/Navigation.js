import logo from "../../../../images/logo.png";
import "./Navigation.css";
import "../../landing.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="banner_nav">
      <img src={logo} height="100px" width="100px" alt="techno_together_logo" />
      <div className="banner_nav_nav">
        <Link to="" className="nav_links">
          How to Study Together
        </Link>
        <Link to="" className="nav_links">
          Design a Study Universe
        </Link>
        <Link to="/forum" className="nav_links">
          Forums
        </Link>
        <Link to="" className="nav_links">
          About
        </Link>
        <Link to="/login" className="nav_links">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
