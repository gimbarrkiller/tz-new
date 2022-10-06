import React from "react";
import "./style.scss";


const MyOrderListTop = () => {
  return (
    <thead>
      <tr className="order-list-top">
        <th>Type</th>
        <th>Side</th>
        <th>amount</th>
        <th>price</th>
        <th>Filled</th>
        <th>Status</th>
        <th>Cancel</th>
      </tr>
    </thead>
  )
}

export default MyOrderListTop;