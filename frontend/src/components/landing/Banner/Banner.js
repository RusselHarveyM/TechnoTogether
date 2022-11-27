import "../landing.css";
import "./Banner.css";
import Navigation from "./navigation/Navigation";
import Logo from "./logo/Logo";
// import { Link, useMatch, Route, Routes } from "react-router-dom";
// only enable if register component

function Banner() {
  // let match = useMatch();

  return (
    <div className="wrapper">
      <Navigation />
      <div className="banner_card">
        <h1>Join now and learn together!</h1>
        <a href="#" className="rgstr_link">
          Register
        </a>
        {/* <Link to={`${match.url}/register`} className="rgstr_link">
          Register
        </Link>
        <Routes>
          <Route exact path="/register"></Route>
        </Routes> */}
        <Logo />
      </div>
    </div>
  );
}

export default Banner;
