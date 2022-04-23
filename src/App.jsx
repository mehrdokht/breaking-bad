import React from "react";
import ReactDOM from "react-dom";
import Home from "../src/Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Quote } from "./Pages/Quote";

const App = () => (
  <Router>
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Quote />} path="/quote/:text" />
      </Routes>
    </>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
