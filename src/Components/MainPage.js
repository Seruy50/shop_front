import { React, useState } from "react";
import Shops from "./MainPage/Shops.js";
import Dishes from "./MainPage/Dishes.js";

export default function MainPage() {
  const [shopId, setShopId] = useState("64788036b33af5ce1571914f");

  return (
    <div className="mainPage">
      <Shops setShopId={setShopId} shopId={shopId} />
      <Dishes shopId={shopId} />
    </div>
  );
}
