import { React, useEffect, useState} from 'react';
import axios from 'axios';



export function Dishes({ shopId, orders, setOrders }){
    const [dishes, setDishes] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/${shopId}`)
        .then(item => {
            let some = [];
            item.data.map(item => some.push(<div className="dishes__card" key={item._id}>
                    <div>IMAGE</div><p>Name: {item.name}</p><p>Price: {item.price}</p><p><button onClick={() => {
                        if(!orders.includes(item._id)){
                            let obj = {
                                dishId: item._id,
                                name: item.name,
                                price: item.price,
                                count: 1
                            }
                            setOrders([...orders, obj])
                        }}}>add to Cart</button></p>
                </div>))
            setDishes(some)
        })
        .catch(e => console.log(e))
    }, [shopId, orders, setOrders])
    
    return <div className="dishes">{dishes}</div>
}



