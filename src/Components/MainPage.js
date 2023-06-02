import { React, useState } from 'react';
import { Restaurants } from './MainPage/Restaurants.js';
import { Dishes } from './MainPage/Dishes.js'

export function MainPage({ orders, setOrders }){
    const [shopId, setShopId] = useState('64788036b33af5ce1571914f');

    return <div className="MainPage">
        <Restaurants setShopId={setShopId} />
        <Dishes shopId={shopId} orders={orders} setOrders={setOrders}/>
    </div>
}