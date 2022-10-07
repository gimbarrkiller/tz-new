import { createSlice } from "@reduxjs/toolkit";

const ordersInBackReducer = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    matchOrders: [],
  },
  reducers: {
    addOrders(state, action) {
      state.orders = action.payload
    },
    addMatchOrders(state, action) {
      state.matchOrders = action.payload
    }
  }
})

export const { addOrders, addMatchOrders } = ordersInBackReducer.actions
export default ordersInBackReducer.reducer
