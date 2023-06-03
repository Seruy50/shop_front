import { React } from "react";
import dish from "../dish.png";

const Dish = ({ id, name, price, count, changeCount, deleteCard }) => {
  return (
    <div className="shoppingCart__card" key={id}>
      <div className="dishes__card__image">
        <img src={dish} alt="dish" />
      </div>
      <div className="shoppingCart__card__description">
        <p>Name: {name};</p>
        <p>Price: {price}$;</p>
        <p>Count: {count};</p>
        <p>
          Change count of dishes:
          <input
            className={"shoppingCart__card__counter"}
            value={count}
            onChange={(e) => changeCount(e)}
            id={id}
            type="number"
          />
        </p>
        <div>
          <button
            className={"shoppingCart__card__button"}
            onClick={() => deleteCard(id)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Orders({ orders, setOrders }) {
  let dishes = orders || [];

  function deleteCard(id) {
    let cards = [];
    orders.map((item) => {
      if (item._id !== id) {
        cards.push(item);
      }
    });
    setOrders(cards);
    localStorage.setItem("cart", JSON.stringify(cards));
  }

  function changeCount(e) {
    setOrders(() => {
      let cards = orders.map((item) => {
        if (item._id === e.target.id) {
          item.count = e.target.value;
          return item;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(cards));
      return cards;
    });
  }

  return (
    <div className="shoppingCart__orders">
      {dishes.map((d) => (
        <Dish
          id={d._id}
          name={d.name}
          price={d.price}
          count={d.count}
          changeCount={changeCount}
          deleteCard={deleteCard}
        />
      ))}
    </div>
  );
}
