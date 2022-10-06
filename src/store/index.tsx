import { configureStore } from "@reduxjs/toolkit";
import orderInBackReducer from "./reducers/ordersInBackReducer";
import mainPageReducer from "./reducers/mainPageReducer";

type RootReducer = {
  mainPage: any,
  orders: any,
}

export default configureStore<RootReducer>({
  reducer: {
    mainPage: mainPageReducer,
    orders: orderInBackReducer,
  }
})
