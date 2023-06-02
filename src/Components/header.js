import React from 'react';
import { Link } from 'react-router-dom';
import { MainPage } from './MainPage.js';
import { ShopingCart } from './ShopingCart';
import axios from 'axios';

export function Header() {

    const tryr = () => {
        axios.get('http://localhost:3001/McDonalds').then(item => console.log(item)).catch(err => console.log(err))
    }

    return  <header>
                <div className="header__links">
                    <div className="header__links__one">
                        <p onClick={tryr}><Link to='/'>Shop</Link></p>
                    </div>
                    <span className="header__links__span"></span>
                    <div className="header__links__one">
                        <p><Link to="/shopingCart">Shoping Cart</Link></p>
                    </div>
                </div>
            </header>
}