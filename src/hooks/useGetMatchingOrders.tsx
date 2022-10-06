import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_PATH, GET_MATCHING_ORDERS } from "../api/constVariable";
import { addOrders } from "../store/reducers/ordersInBackReducer";
import {
  gettingMatchingOrders,
  showInfoModal,
  startLoading,
} from "../store/reducers/mainPageReducer";

const useGetMatchingOrders = () => {
  const { form, isMatchingOrdersLoad } = useSelector((state: any) => state.mainPage)
  let { tokenA, tokenB, amountA, amountB, isMarket } = form
  const ORDER_PARAMS = `${tokenA ? `tokenA=${tokenA}&` : ''}${tokenB ? `tokenB=${tokenB}&` : ''}${amountA ? `amountA=${amountA}&` : ''}${amountB ? `amountB=${amountB}&` : ''}${`isMarket=${isMarket}`}`

  const dispatch = useDispatch()

  useEffect(() => {
    !!tokenA && !!tokenB && !!amountA && !!amountB && isMatchingOrdersLoad &&
    fetch(`${BASE_PATH}/${GET_MATCHING_ORDERS}?${ORDER_PARAMS}`)
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
        dispatch(gettingMatchingOrders(false))
        dispatch(showInfoModal(false))
      })
  }, [isMatchingOrdersLoad])
}
export default useGetMatchingOrders