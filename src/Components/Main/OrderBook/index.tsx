import React from "react";
import OrderBookList from "./OrderBookList";
import "./style.scss";
import {useSelector} from "react-redux";


const OrderBook = () => {
  const { matchOrders } = useSelector((state: any) => state.orders)

  return (
    <div className="main-block__order-book">
      <h2>Order book</h2>
      {!!matchOrders?.length ? (
        matchOrders?.map(() => {
          return (
            <OrderBookList />
          )
        })
      ) : (
        <p className="choose-tokens">Choose tokens to see prices</p>
      )}
    </div>
  );
}

export default OrderBook;