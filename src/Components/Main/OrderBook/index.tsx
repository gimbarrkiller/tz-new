import React from "react";
import OrderBookList from "./OrderBookList";
import "./style.scss";


const OrderBook = () => {
  return (
    <div className="main-block__order-book">
      <h2>Order book</h2>
      <OrderBookList />
      <OrderBookList />
      <OrderBookList />
      <p className="choose-tokens">Choose tokens to see prices</p>
    </div>
  );
}

export default OrderBook;