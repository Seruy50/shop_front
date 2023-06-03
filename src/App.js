import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { MainPage } from './Components/MainPage.js';
import { ShopingCart } from './Components/ShoppingCart.js';
import { Header } from './Components/header.js'
import './styles.css'

export default function App(){
  return (
      <Router>
        <Header />
        <Routes>
          <Route element={<MainPage />} path="/"></Route>
          <Route element={<ShopingCart />} path="/shopingCart"></Route>
          <Route></Route>
        </Routes>
      </Router>
  )
}