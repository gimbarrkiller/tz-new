import { BASE_PATH, GET_ORDERS } from "../api/constVariable";
import { useDispatch, useSelector } from "react-redux";
import { addOrders } from "../store/reducers/ordersInBackReducer";
import { gettingOrders, showInfoModal, startLoading } from "../store/reducers/mainPageReducer";
import { useEffect } from "react";

const useGetOrders = () => {
  const { form, isOrdersLoad } = useSelector((state: any) => state.mainPage)
  let { tokenA, tokenB, amountA, amountB, user } = form
  const ORDER_PARAMS = `${tokenA ? `tokenA=${tokenA}&` : ''}${tokenB ? `tokenB=${tokenB}&` : ''}${user ? `user=${user}&` : ''}`
  const dispatch = useDispatch()

  useEffect(() => {
    !!tokenA && !!tokenB && !!amountA && !!amountB && isOrdersLoad &&
    fetch(`${BASE_PATH}/${GET_ORDERS}?${ORDER_PARAMS}`)
      .then(res => res.json())
      .then(
        (result) => {
          dispatch(startLoading(true))
          dispatch(addOrders(result))
        },
        (error) => {
          console.log(error)
        }
      )
      .then(() => {
        dispatch(startLoading(false))
        dispatch(gettingOrders(false))
        dispatch(showInfoModal(false))
      })
  }, [isOrdersLoad])
}
export default useGetOrders