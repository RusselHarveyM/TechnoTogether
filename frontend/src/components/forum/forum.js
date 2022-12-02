import React from "react";
import "./Forum.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

function Forum() {
  return (
    <>
      <div className="gridForum_container">
        <nav className="grid_head_nav"></nav>
        <nav className="grid_home_nav">
          <img
            src={logo}
            height="100px"
            width="100px"
            alt="techno_together_logo"
          />
          <Link className="applyTutor_Btn">Apply as a Tutor</Link>
          <div className="grid_home_nav_items">
            <Link>Overview</Link>
            <Link>Study Area</Link>
            <Link>Solo Space</Link>
            <Link>Learning Goals</Link>
            <Link>Chat Room</Link>
            <Link>Study Statistics</Link>
            <Link>Find Tutor</Link>
            <Link>Forum</Link>
            <Link>Settings</Link>
          </div>
          <div className="merchant">
            <h5>Get mobile app</h5>
          </div>
        </nav>
        <article className="grid_body"></article>
      </div>
    </>
  );
}

export default Forum;
