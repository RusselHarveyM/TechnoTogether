import "./App.css";
import Landing from "./components/landing/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import { useState } from "react";

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
          <Route path="/home/*" element={<Home basename="/home" />} />
          <Route
            path="/login"
            element={<Login login={login} error={error} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
