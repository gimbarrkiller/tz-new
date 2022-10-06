import { createSlice } from "@reduxjs/toolkit";

const mainPageReducer = createSlice({
  name: 'mainPage',
  initialState: {
    form: {},
    myLogin: '',
    isErrorModalShow: false,
    isInfoModalShow: false,
    isLoading: false,
    isMatchingOrdersLoad: false,
    isOrdersLoad: false,

  },
  reducers: {
    addData(state: { form: any }, action: any) {
      state.form = action.payload
    },
    addMyLogin(state: { myLogin: string }, action: any) {
      state.myLogin = action.payload
    },
    showErrorModal(state: { isErrorModalShow: boolean }, action: any) {
      state.isErrorModalShow = action.payload
    },
    showInfoModal(state: { isInfoModalShow: boolean }, action: any) {
      state.isInfoModalShow = action.payload
    },
    gettingMatchingOrders(state: { isMatchingOrdersLoad: boolean }, action: any) {
      state.isMatchingOrdersLoad = action.payload
    },
    gettingOrders(state: { isOrdersLoad: boolean }, action: any) {
      state.isOrdersLoad = action.payload
    },
    startLoading(state: { isLoading: boolean }, action: any) {
      state.isLoading = action.payload
    }
  }
})

export const {
  addData,
  addMyLogin,
  showErrorModal,
  showInfoModal,
  startLoading,
  gettingMatchingOrders,
  gettingOrders,
} = mainPageReducer.actions
export default mainPageReducer.reducer
