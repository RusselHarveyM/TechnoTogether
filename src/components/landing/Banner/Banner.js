import "./Banner.css";
import Navigation from "./navigation/Navigation";
import bootstrap from "bootstrap";

function Banner() {
  return (
    <div className="wrapper">
      <Navigation />
      <div className="banner_card">
        <h1>Join now and learn together!</h1>
        <a href="#" className="registerBtn">
          Register
        </a>
        <nav className="logoContainer">
          <img
            src="https://download.logo.wine/logo/Facebook/Facebook-f_Logo-Black-Logo.wine.png"
            alt="fb_logo"
          />
          <img
            src="https://download.logo.wine/logo/Gmail/Gmail-Logo.wine.png"
            alt="gmail_logo"
          />
          <img
            src="https://download.logo.wine/logo/Discord_(software)/Discord_(software)-Logo-Black-Logo.wine.png"
            alt="discord_logo"
          />
        </nav>
      </div>
    </div>
  );
}

export default Banner;
