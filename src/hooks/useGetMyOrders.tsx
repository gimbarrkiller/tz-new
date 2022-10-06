import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_PATH, GET_ORDERS } from "../api/constVariable";
import { addOrders } from "../store/reducers/ordersInBackReducer";


const useGetMyOrders = () => {
  const { myLogin } = useSelector((state: any) => state.mainPage)
  const ORDER_PARAMS = `${myLogin && `user=${myLogin}`}`

  const dispatch = useDispatch()

  useEffect(() => {
    !!myLogin && fetch(`${BASE_PATH}/${GET_ORDERS}?${ORDER_PARAMS}`)
      .then(res => res.json())
      .then(
        (result) => {
          dispatch(addOrders(result))
        },
        (error) => {
          console.log(error)
        }
      )
  }, [myLogin])
}
export default useGetMyOrders