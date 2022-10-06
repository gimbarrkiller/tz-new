import React from "react";
import PlaceOrder from "./PlaceOrder";
import MyOrders from "./MyOrders";
import OrderBook from "./OrderBook";
import "./style.scss";

const Main = () => {
  return (
    <div className="main-block">
      <div className="main-block-col">
        <PlaceOrder />
        <MyOrders />
      </div>
      <OrderBook />
    </div>
  );
}

export default Main;
