import React from "react";
import Series from "./components/Series";
import Home from "./components/Homepage";
import Filmes from "./components/Filmes";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <h1 style={{ color: "blue" }}>PAGES:</h1>

        <ul
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            listStyle: "none",
            fontSize: "1.5em"
          }}
        >
          <li>
            <Link style={{ color: "yellow" }} to="/series">
              Series
            </Link>
          </li>
          <li>
            <Link style={{ color: "yellow" }} to="/filmes">
              Filmes
            </Link>
          </li>
          <li>
            <Link style={{ color: "yellow" }} to="/">
              Home
            </Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </Router>
    );
  }
}
