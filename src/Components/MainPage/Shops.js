import { React, useState, useEffect } from "react";
import axios from "axios";

const Shop = ({ activeShopId, setShopId, name, id }) => {
  return (
    <button
      className={`shops__button ${
        activeShopId === id ? "shops__button__active" : ""
      }`}
      onClick={() => setShopId(id)}
    >
      {name}
    </button>
  );
};

export default function Shops({ shopId, setShopId }) {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    axios
      .get("https://foodshop-back.onrender.com/shops")
      .then((shops) => {
        setShops(shops.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="shops">
      <p>Shops:</p>
      {shops.map((r) => (
        <Shop
          key={r._id}
          activeShopId={shopId}
          setShopId={setShopId}
          name={r.name}
          id={r._id}
        />
      ))}
    </div>
  );
}
