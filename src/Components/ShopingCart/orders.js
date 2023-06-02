import { React } from 'react';

export default function Orders({ orders, setOrders }){
    

    let dishes = []; 

    
    for(let item of orders){
        dishes.push(<div className="shopingcart__card" key={item.dishId}><div>IMAGE</div><div><p>Name: {item.name}</p><p>Price: {item.price}</p><p>Count: {item.count}</p><p>Change count: <input value={item.count} id={item.dishId} onChange={(e) => changeCount(e)} type="number"></input></p></div></div>)
    }

    
    function changeCount(e){
        setOrders(
            orders.map(item => {
                if(item.dishId === e.target.id){
                    item.count = e.target.value;
                    return item;
                }
                return item;
            })
        )
    }
    
    return <div className="shopinCart__orders">
    {dishes}
</div>
}

