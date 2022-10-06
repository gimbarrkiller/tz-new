import React from "react";
import { useSelector } from "react-redux";
import MyOrderListTop from "./MyOrderListTop";
import MyOrderList from "./MyOrderList";
import "./style.scss";

const MyOrders = () => {
  const { orders } = useSelector((state: any) => state.orders)

  return (
    <div className="main-block__my-orders">
      <h2>My Orders</h2>
      {!orders.length ? (
        <div className="main-block__my-orders-table">
          <table>
            <MyOrderListTop />
            {orders.map(() => {
              return (
                <MyOrderList
                  type={orders.filled}
                  side={orders.filled}
                  amount={orders.filled}
                  price={orders.filled}
                  filled={orders.filled}
                  cancel={orders.cancel}
                />
              )
            })}
          </table>
        </div>
      ) : (
        <p className="not-wallet">Connect your wallet to start trading</p>
      )}
    </div>
  );
}

export default MyOrders;