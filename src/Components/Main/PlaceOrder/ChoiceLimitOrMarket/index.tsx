import React, { FC } from "react";
import { ChoiceType } from "../../../../types/type";

const ChoiceLimitOrMarket: FC<ChoiceType> = ({ selected, setSelected }) => {
  return (
    <div className="choice">
      <span
        className={`choice-top${selected ? ' choice-top-selected' : ''}`}
        onClick={() => setSelected(true)}
      >
        Limit
      </span>
      <span
        className={`choice-top${!selected ? ' choice-top-selected' : ''}`}
        onClick={() => setSelected(false)}
      >
        Market
      </span>
    </div>
  )
}
export default ChoiceLimitOrMarket;