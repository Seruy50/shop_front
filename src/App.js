import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage.js";
import ShoppingCart from "./Components/ShoppingCart.js";
import Header from "./Components/Header.js";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<MainPage />} path="/"></Route>
        <Route element={<ShoppingCart />} path="/shopingCart"></Route>
        <Route></Route>
      </Routes>
    </Router>
  );
}
