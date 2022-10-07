import React, { FC } from "react";
import { MyOrderListType } from "../../../../types/type";
import "./style.scss";

const MyOrderList: FC<MyOrderListType> = ({
  type,
  side,
  amount,
  price,
  filled,
  status,
  cancel,
}) => {

  return (
    <tbody>
      <tr className="order-list">
        <th>{type ? 'Market' : 'Limit'}</th>
        <th>{side ? 'Buy' : 'Sell'}</th>
        <th>{amount}</th>
        <th>{price}</th>
        <th>{filled}</th>
        <th><span className={status ? 'filled' : 'not-filled'}>Filled</span></th>
        <th><span className={cancel ? 'cancel' : ''}>{cancel ? 'Cancel' : 'N/A'}</span></th>
      </tr>
    </tbody>
  )
}

export default MyOrderList;