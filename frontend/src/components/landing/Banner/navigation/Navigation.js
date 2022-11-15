import logo from "../../../../images/logo.png";
import "./Navigation.css";
import "../../landing.css";

function Navigation() {
  return (
    <nav className="banner_nav">
      <img src={logo} height="100px" width="100px" alt="techno_together_logo" />
      <div className="banner_nav_nav">
        <a href="#">How to Study Together</a>
        <a href="#">Design a Study Universe</a>
        <a href="#">Forums</a>
        <a href="#">About</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
}

export default Navigation;
