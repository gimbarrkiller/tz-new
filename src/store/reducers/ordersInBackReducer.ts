import { createSlice } from "@reduxjs/toolkit";

const ordersInBackReducer = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
  },
  reducers: {
    addOrders(state, action) {
      state.orders = action.payload
    }
  }
})

export const { addOrders } = ordersInBackReducer.actions
export default ordersInBackReducer.reducer
