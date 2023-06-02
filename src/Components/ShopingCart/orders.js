import { React, useState } from 'react';

export default function Orders({ orders, setOrders}){
    
  
    
    
    
    console.log(orders)

    let dishes = []; 

    if(orders !== null){
        for(let item of orders){
            dishes.push(<div className="shopingcart__card" key={item.Id}><div>IMAGE</div><div><p>Name: {item.name}</p><p>Price: {item.price}</p><p>Count: {item.count}</p><p>Change count: <input value={item.count} onChange={(e) => changeCount(e)} id={item._id} type="number"></input></p><button onClick={() => deleteCard(item._id)}>Delete</button></div></div>)
        }
    }    

    function deleteCard(id){
        let mid = [];
        orders.map(item => {
            if (item._id !== id){
                mid.push(item);
            }
        })
        console.log(mid)
        setOrders(mid);
        localStorage.setItem('cart', JSON.stringify(mid))
    }

    
    function changeCount(e){
        setOrders( () => {
            console.log(e.target._id)
            let some = orders.map(item => {
                if(item._id === e.target.id){
                    item.count = e.target.value;
                    return item;
                }
                return item;
            })
            localStorage.setItem('cart', JSON.stringify(some))
            return some;
    })
       
    }
    
    return <div className="shopinCart__orders">
    {dishes}
</div>
}


