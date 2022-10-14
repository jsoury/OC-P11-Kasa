import React from "react";
import ReactDOM from "react-dom/client";
import "./style/global.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Hosting from "./pages/Hosting";

import Error from "./components/Error";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Container from "./components/Container";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Container>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="hosting/:id" element={<Hosting />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="hosting/*" element={<Error />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
