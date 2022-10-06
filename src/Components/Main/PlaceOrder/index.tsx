import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addData, showErrorModal, showInfoModal} from "../../../store/reducers/mainPageReducer";
import useGetOrders from "../../../hooks/useGetOrders";
import InputText from "../../UI/Fields/InputText";
import Button from "../../UI/Button";
import ModalOrderDetails from "../../Modal/ModalOrderDetails";
import useGetMatchingOrders from "../../../hooks/useGetMatchingOrders";
import ChoiceLimitOrMarket from "./ChoiceLimitOrMarket";
import ChoiceBuyOrSell from "./ChoiceBuyOrSell";
import "./style.scss";

const PlaceOrder = () => {
  const [isBuy, setIsBuy] = useState(true)
  const [isMarket, setIsMarket] = useState(true)
  const [limitPrice, setLimitPrice] = useState('Expected order price')
  const { isInfoModalShow } = useSelector((state: any) => state.mainPage)

  const dispatch = useDispatch()

  const addingDataInStore = (e: any) => {
    e.preventDefault()
    let data = {
      isMarket,
      isBuy,
      tokenA: e.target[0].value,
      amountA: e.target[1].value,
      tokenB: e.target[2].value,
      amountB: e.target[3].value,
      orderPrice: `${+e.target[1].value * +e.target[3].value}`,
    };

    (!data.tokenA || !data.amountA || !data.tokenB || !data.amountB) ?
      dispatch(showErrorModal(true)) : dispatch(showInfoModal(true))

      dispatch(addData(data))
      setLimitPrice(`${+e.target[1].value * +e.target[3].value} Token B`)
  }
  useGetMatchingOrders()
  useGetOrders()

  return (
    <div className="main-block__place-order">
      <div className="main-block__row">
        <h2>Place the Order</h2>
        <ChoiceLimitOrMarket selected={isMarket} setSelected={setIsMarket} />
      </div>
      <form onSubmit={addingDataInStore} className="form-block">
        <ChoiceBuyOrSell selected={isBuy} setSelected={setIsBuy} />
        <div className="inputs-block">
          <InputText
            placeholder="Token A smart contract address"
            size="big"
          />
          <InputText
            placeholder="Token A amount"
            size="normal"
            type="number"
          />
          <InputText
            placeholder="Token B smart contract address"
            size="big"
          />
          <InputText
            placeholder="Limit price (in Token B)"
            size="normal"
            type="number"
          />
          <InputText
            placeholder={limitPrice}
            size="normal"
            disabled
          />
        </div>
        <Button text="Place xx Order" loading={isInfoModalShow} />
      </form>
      <ModalOrderDetails />
    </div>
  );
}

export default PlaceOrder;