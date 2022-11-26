import "../landing.css";
import "./Banner.css";
import Navigation from "./navigation/Navigation";
import Logo from "./logo/Logo";

function Banner() {
  return (
    <div className="wrapper">
      <Navigation />
      <div className="banner_card">
        <h1>Join now and learn together!</h1>
        <a href="#" className="registerBtn">
          Register
        </a>
        <Logo />
      </div>
    </div>
  );
}

export default Banner;
