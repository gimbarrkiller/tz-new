import React, { FC } from "react";
import { MyOrderListType } from "../../../../types/type";
import "./style.scss";

const MyOrderList: FC<MyOrderListType> = ({ filled, cancel }) => {

  return (
    <tbody>
      <tr className="order-list">
        <th>Market</th>
        <th>Buy</th>
        <th>50</th>
        <th>251.8</th>
        <th>50</th>
        <th><span className={filled ? 'filled' : 'not-filled'}>Filled</span></th>
        <th><span className={cancel && 'cancel'}>N/A</span></th>
      </tr>
    </tbody>
  )
}

export default MyOrderList;