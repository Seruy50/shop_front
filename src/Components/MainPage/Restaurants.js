import { React, useState, useEffect } from 'react';
import axios from 'axios';

export function Restaurants({ setShopId }){
    const [rests, setRests] = useState();

    useEffect(() => {
        axios.get('https://foodshop-back.onrender.com/rests')
        .then(item => {
            let list = [];
            item.data.map(item => list.push(<div className="Restaurants__button" onClick={() => setShopId(item._id)} key={item._id}><p>{item.name}</p></div>));
            setRests(list);
        }).catch(e => console.log(e))
    }, [setShopId])

    return <div className="Restaurants">
        <p>Shops:</p>
        {rests}
    </div>
}



