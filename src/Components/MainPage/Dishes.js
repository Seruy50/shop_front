import { React, useEffect, useState } from "react";
import axios from "axios";
import dish from '../dish.png';

const Dish = ({ name, price, id, shopId, cartItemShopid }) => {
  const addToCart = () => {
    let array = [];

    let data = JSON.parse(localStorage.getItem("cart")) || [];

    if (!data.find((d) => d._id === id)) {
      array = [...data, { count: 1, name: name, price: price, _id: id , shopId: shopId}];
    } else {
      return;
    }

    localStorage.setItem("cart", JSON.stringify(array));
  };
  return (
    <div className="dishes__card">
      <div className="dishes__card__image">
        <img src={dish} alt="dish"/>
      </div>
      <div className="dishes__card__description">
          <p>Name: {name}</p>
          <p>Price: {price}</p>
      </div>
      <div>
            <button  className="dishes__card__button"
              disabled={cartItemShopid  && (cartItemShopid !== shopId)}
              onClick={() => {
                addToCart();
              }}
            >
              add to Cart
            </button>
      </div>
    </div>
  );
};

export function Dishes({ shopId }) {
  const [dishes, setDishes] = useState([]);
  const [cartItemShopid, setCartItemShopId] = useState(null);
  

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length){
        
        setCartItemShopId(cart[0].shopId)
  }}

  useEffect(() => {
    axios.get(`https://foodshop-back.onrender.com/${shopId}`)
      .then((data) => {
        setDishes(data.data);
      })
      .catch((e) => console.log(e));
      getCart()
  }, [shopId]);

  return (
    <div className="dishes">
      {dishes.map((d) => (
        <Dish name={d.name} price={d.price} id={d._id} shopId={d.shop_id} cartItemShopid={cartItemShopid} />
      ))}
    </div>
  );
}



