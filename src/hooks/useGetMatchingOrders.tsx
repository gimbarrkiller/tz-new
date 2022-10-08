import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_PATH, GET_MATCHING_ORDERS } from "../api/constVariable";
import { addMatchOrders } from "../store/reducers/ordersInBackReducer";
import {
  gettingMatchingOrders,
  showInfoModal,
  startLoading,
} from "../store/reducers/mainPageReducer";
import axios from "axios";

const useGetMatchingOrders = () => {
  const { form, isMatchingOrdersLoad } = useSelector((state: any) => state.mainPage)
  let { tokenA, tokenB, amountA, amountB, isMarket } = form

  const dispatch = useDispatch()

  useEffect(() => {
    !!tokenA && !!tokenB && !!amountA && !!amountB && isMatchingOrdersLoad &&
    axios.get(`${BASE_PATH}/${GET_MATCHING_ORDERS}`, {
      params: {
        ...tokenA ? { tokenA: tokenA } : {},
        ...tokenB ? { tokenB: tokenB } : {},
        ...amountA ? { user: amountA } : {},
        ...amountB ? { amountB: amountB } : {},
        ...isMarket ? { isMarket: isMarket } : {},
      },
    })
      .then((response) => {
        dispatch(startLoading(true))
        dispatch(addMatchOrders(response.data))
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(function () {
        dispatch(startLoading(false))
        dispatch(gettingMatchingOrders(false))
        dispatch(showInfoModal(false))
      });
  }, [isMatchingOrdersLoad])
}
export default useGetMatchingOrders