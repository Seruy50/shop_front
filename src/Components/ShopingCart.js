import { React, useState, useEffect } from 'react';
import Orders from './ShopingCart/orders.js';
import axios from 'axios'

export function ShopingCart(){
    const [totalPrice, setTotalPrice] = useState(0);
    const [orders, setOrders] = useState( () => {
     
     let order = JSON.parse(localStorage.getItem('cart'))
     if(order === null) {
          return;
     }

     if(Array.isArray(order)){
         return [...order]
     } else {
         return order
     }
 }    
 )
    
    useEffect(() => {
     let c = getTotalPrice(orders);
     setTotalPrice(c)
    }, [orders])

    return <div>
               <div className="shopinCart__formOrders">
                    <div className="shopinCart__form">
                         <form action="/" method="POST" id="contactForm" onSubmit={(e) => formAndSendOrder(e, orders, totalPrice)}>
                         <p>
                              Name: <br/>
                              <input name="name"></input>
                         </p>
                         <p>
                              Email: <br/>
                              <input type="email" name="email"></input>
                         </p>
                         <p>
                              Phone: <br/>
                              <input type="tel"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Format: 555-555-5555" name="phone"></input>
                         </p>
                         <p>
                              Address: <br/>
                              <input name="adress"></input>
                         </p> 
                         </form>
                    </div>
                    <Orders orders={orders} setOrders={setOrders} />     
               </div>
               <div className="submitOrder">
                    <p>Total price: {totalPrice}</p><button type="submit" form="contactForm">Submit</button>
               </div>
     </div>
}

function formAndSendOrder(e, order, totalPrice){
     e.preventDefault();
     let dishes = []
     for(let dish of order){
          dishes.push({
               id: dish.dishId,
               count: dish.count
          })
     }
     let finalOrder = {
          dishes: dishes,
          orderPrice: totalPrice,
          user_name: e.target.name.value,
          user_email: e.target.email.value,
          user_phone: e.target.phone.value.split('-').join(''),
          user_adress: e.target.adress.value,
     }
     console.log(finalOrder)

     axios.post('https://foodshop-back.onrender.com/order', finalOrder)
     .then(item => console.log(item))
     .catch(e => console.log(e))
}

function getTotalPrice(orders){
     let sum = 0;
     console.log(orders)
     orders.map(item => {
          console.log(item.price * item.count)
          sum += item.price * item.count;
     })
     return sum;
}