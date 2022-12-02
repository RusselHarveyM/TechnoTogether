import React from "react";
import "./Home.css";
import logo from "../../images/logo.png";
import Forum from "../forum/Forum";
import Overview from "../overview/Overview";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
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
            <Link to="" className="nav_links">
              Overview
            </Link>
            <Link>Study Area</Link>
            <Link>Solo Space</Link>
            <Link>Learning Goals</Link>
            <Link>Chat Room</Link>
            <Link>Study Statistics</Link>
            <Link>Find Tutor</Link>
            <Link to="forum" className="nav_links">
              Forum
            </Link>
            <Link>Settings</Link>
          </div>
          <div className="merchant">
            <h5>Get mobile app</h5>
          </div>
        </nav>
        <article className="grid_body">
          <Routes>
            <Route path="/forum" element={<Forum />} />
            <Route path="" element={<Overview />} />
          </Routes>
        </article>
      </div>
    </>
  );
}

export default Home;
