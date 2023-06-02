import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { MainPage } from './Components/MainPage.js';
import { ShopingCart } from './Components/ShopingCart.js';
import { Header } from './Components/header.js'
import './styles.css'

export default function App(){
  const [orders, setOrders] = useState([]);
  return (
      <Router>
        <Header />
        <Routes>
          <Route element={<MainPage orders={orders} setOrders={setOrders}/>} path="/"></Route>
          <Route element={<ShopingCart orders={orders} setOrders={setOrders}/>} path="/shopingCart"></Route>
          <Route></Route>
        </Routes>
      </Router>
  )
}