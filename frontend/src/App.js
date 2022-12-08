import "./App.css";
import Landing from "./components/landing/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Overview from "./components/overview/Overview";
import { useState } from "react";
import Findtutor from "./components/findtutor/findtutor";
function App() {
  const [user, setUser] = useState({ username: "" });
  const [error, setError] = useState("");

  const login = (details) => {
    console.log(details);

    // if (
    //   details.username === adminUser.username &&
    //   details.password === adminUser.password
    // ) {
    //   console.log("logged in");
    // }
  };

  const logout = (details) => {
    console.log("logout");
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/findtutor" element={<Findtutor />} />
          <Route path="/overview" element={<Overview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
