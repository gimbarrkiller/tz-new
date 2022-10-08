import React from "react";
import { useSelector } from "react-redux";
import MyOrderListTop from "./MyOrderListTop";
import MyOrderList from "./MyOrderList";
import "./style.scss";

const MyOrders = () => {
  const { myOrders } = useSelector((state: any) => state.orders)

  return (
    <div className="main-block__my-orders">
      <h2>My Orders</h2>
      {myOrders?.data?.length ? (
        <div className="main-block__my-orders-table">
          <table>
            <MyOrderListTop />
            {myOrders?.map((order: any) => {
              return (
                <MyOrderList
                  type={!!order?.tokenA && !!order?.tokenB}
                  side={order?.tokenB}
                  amount={order?.amountA}
                  price={`${+order?.amountA + +order?.amountB}`}
                  filled={order?.amountLeftToFill}
                  status={order?.amountLeftToFill}
                  cancel={order?.isCanceled}
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