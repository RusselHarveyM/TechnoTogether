import "../landing.css";
import "./Banner.css";
import Navigation from "./navigation/Navigation";
import Logo from "./logo/Logo";
import { Link } from "react-router-dom";
// only enable if register component

function Banner() {
  // let match = useMatch();

  return (
    <div className="o_wrapper">
      <div className="wrapper">
        <Navigation />
        <div className="banner_card">
          <h1>Join now and learn together!</h1>
          <div class="RegBtn">
                <Link to="/register">
                    <button class = "reg_btn"><span>Register Now</span></button>
                </Link>
            </div>
          {/* <Link to={`${match.url}/register`} className="rgstr_link">
          Register
        </Link>
        <Routes>
          <Route exact path="/register"></Route>
        </Routes> */}
          <Logo />
        </div>
      </div>
    </div>
  );
}

export default Banner;
