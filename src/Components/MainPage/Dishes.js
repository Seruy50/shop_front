import { React, useEffect, useState} from 'react';
import axios from 'axios';



export function Dishes({ shopId }){
    const [dishes, setDishes] = useState([]);
    useEffect(() => {
        axios.get(`https://foodshop-back.onrender.com/${shopId}`)
        .then(item => {
            let some = [];
            item.data.map(item => some.push(<div className="dishes__card" key={item._id}>
                    <div>IMAGE</div><p>Name: {item.name}</p><p>Price: {item.price}</p><p><button onClick={() => {
                      
                        
                        let array = [];

                        if(!localStorage.length){
                            localStorage.setItem( 'cart', JSON.stringify(item))
                        } else {
                            let data = JSON.parse(localStorage.getItem('cart'));
                            
                            if(Array.isArray(data)){
                                array.push(...data)
                            } else {
                                array.push(data)
                            }
                        }
                        let ids = [];

                        array.map(item => ids.push(item._id));

                        if(!ids.includes(item._id)){
                            item.count = 1;
                            array.push(item)
                        } else{
                            return;
                        }
                        
                        localStorage.setItem('cart', JSON.stringify(array));
                }}>add to Cart</button></p>
                </div>))
            setDishes(some)
        })
        .catch(e => console.log(e))
    }, [shopId])
    
    return <div className="dishes">{dishes}</div>
}



