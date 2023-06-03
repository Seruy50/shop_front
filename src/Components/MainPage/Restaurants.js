import { React, useState, useEffect } from 'react';
import axios from 'axios';

const Restaurant = ({ activeShopId, setShopId, name, id }) => {

    return <button className={`Restaurants__button ${activeShopId === id ? 'Restaurants__button__active' : ''}`}  onClick={() => setShopId(id)} key={id}>{name}</button>
}

export function Restaurants({ shopId, setShopId }){
    const [rests, setRests] = useState([]);

    useEffect(() => {
        axios.get('https://foodshop-back.onrender.com/rests')
        .then(item => {
            setRests(item.data);
        }).catch(e => console.log(e))
    }, [])

    return <div className="Restaurants">
        <p>Shops:</p>
        {rests.map(r => <Restaurant activeShopId={shopId} setShopId={setShopId} name={r.name} id={r._id}/>)}
    </div>
}



