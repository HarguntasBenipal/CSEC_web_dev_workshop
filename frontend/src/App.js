// Import the necessary modules
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Weather from "./Weather";
import "./App.css";

// Home component
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <h3>This is a basic introduction to HTML, the DOM and React</h3>
      <h2>Computer Science Enrichment Club (CSEC) at UTSC</h2>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/weather">Weather</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
