import "./App.css";
import Landing from "./components/landing/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forum from "./components/forum/forum";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
