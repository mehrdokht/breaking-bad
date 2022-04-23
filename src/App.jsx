import React from "react";
import ReactDOM from "react-dom";
import Home from "../src/Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => (
  <Router>
    <>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
