import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_PATH, GET_ORDERS } from "../api/constVariable";
import { addMyOrders } from "../store/reducers/ordersInBackReducer";
import axios from "axios";


const useGetMyOrders = () => {
  const { myLogin } = useSelector((state: any) => state.mainPage)

  const dispatch = useDispatch()

  useEffect(() => {
    !!myLogin && axios.get(`${BASE_PATH}/${GET_ORDERS}`, {
      params: {
        ...myLogin ? { user: myLogin } : {}
      },
    })
      .then((response) => {
        dispatch(addMyOrders(response.data))
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(function () {
        console.log("finally")
      });
  }, [myLogin])
}
export default useGetMyOrders