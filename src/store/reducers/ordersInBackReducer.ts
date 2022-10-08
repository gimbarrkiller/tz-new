import { createSlice } from "@reduxjs/toolkit";

const ordersInBackReducer = createSlice({
  name: 'orders',
  initialState: {
    myOrders: [],
    matchOrders: [],
  },
  reducers: {
    addMyOrders(state, action) {
      state.myOrders = action.payload
    },
    addMatchOrders(state, action) {
      state.matchOrders = action.payload
    }
  }
})

export const { addMyOrders, addMatchOrders } = ordersInBackReducer.actions
export default ordersInBackReducer.reducer
