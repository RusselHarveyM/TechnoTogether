import "./landing.css";
import Banner from "./Banner/Banner";
import videoBg from "../../images/landing01.mp4";

function Landing() {
  return (
    <div>
      <Banner />
      <div className="lnding01">
        <video src={videoBg} autoPlay loop muted id="videoBG"></video>
      </div>
    </div>
  );
}

export default Landing;
