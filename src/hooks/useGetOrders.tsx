import { BASE_PATH, GET_ORDERS } from "../api/constVariable";
import { useDispatch, useSelector } from "react-redux";
import { addMatchOrders } from "../store/reducers/ordersInBackReducer";
import { gettingOrders, showInfoModal, startLoading } from "../store/reducers/mainPageReducer";
import { useEffect } from "react";
import axios from "axios";

const useGetOrders = () => {
  const { form, isOrdersLoad } = useSelector((state: any) => state.mainPage)
  let { tokenA, tokenB, amountA, amountB, user } = form
  const dispatch = useDispatch()

  useEffect(() => {
    !!tokenA && !!tokenB && !!amountA && !!amountB && isOrdersLoad &&
    axios.get(`${BASE_PATH}/${GET_ORDERS}`, {
      params: {
        ...tokenA ? { tokenA: tokenA } : {},
        ...tokenB ? { tokenB: tokenB } : {},
        ...user ? { user: user } : {},
      },
    })
      .then((response) => {
        console.log(response.data)
        dispatch(startLoading(true))
        dispatch(addMatchOrders(response.data))
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(function () {
        dispatch(startLoading(false))
        dispatch(gettingOrders(false))
        dispatch(showInfoModal(false))
      });
  }, [isOrdersLoad])
}
export default useGetOrders