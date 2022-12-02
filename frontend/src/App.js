import "./App.css";
import Landing from "./components/landing/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forum from "./components/forum/Forum";
import Login from "./components/login/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
