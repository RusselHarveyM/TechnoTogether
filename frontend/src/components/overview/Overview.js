import React from "react";
import "./Overview.css";
import { Link } from 'react-router-dom'

import OverviewImage from '../../images/ov.jpg'

function Overview() {
  return (
    <>
      <div class = "overview">
        <img src={OverviewImage} alt = "" width="1301" height="663"/>
        <Link to="/solospace">
          <button type="button" id="sol_btn">Start Solo Space</button>
        </Link>
        <Link to="/studyarea">
          <button type="button" id="stud_btn">Join Study Area</button>
        </Link>
        <Link to="/studyarea">
          <button type="button" id="stud_btn1">Create Study Area</button>
        </Link>
        <div>
        <Link to="/studyarea">
          <span class="close">+</span>
        </Link>
        </div>
      </div>
    </>
  );
}

export default Overview;
