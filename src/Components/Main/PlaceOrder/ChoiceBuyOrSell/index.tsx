import React, { FC } from "react";
import { ChoiceType } from "../../../../types/type";
import "./style.scss";

const ChoiceBuyOrSell: FC<ChoiceType> = ({ selected, setSelected }) => {
  return (
    <div className="choice-two">
      <span
        className={`choice-two-buy${selected ? ' choice-two-buy-selected' : ''}`}
        onClick={() => setSelected(true)}
      >
        Buy
      </span>
      <span
        className={`choice-two-buy${!selected ? ' choice-two-buy-selected' : ''}`}
        onClick={() => setSelected(false)}
      >
        Sell
      </span>
    </div>
  )
}
export default ChoiceBuyOrSell;