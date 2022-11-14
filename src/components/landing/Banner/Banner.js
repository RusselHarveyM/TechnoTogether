import "./Banner.css";
import logo from "../../../images/logo.png";

function Banner() {
  return (
    <div className="wrapper">
      <nav className="banner_nav">
        <img
          src={logo}
          height="100px"
          width="100px"
          alt="techno_together_logo"
        />
        <div className="banner_nav_nav">
          <a href="#">How to Study Together</a>
          <a href="#">Design a Study Universe</a>
          <a href="#">Forums</a>
          <a href="#">About</a>
          <a href="#">Register Now</a>
        </div>
      </nav>
    </div>
  );
}

export default Banner;
