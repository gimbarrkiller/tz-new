export type ButtonType = {
  text: string
  color?: 'white' | 'default' | 'green'
  onClick?: any
  disabled?: boolean
  loading?: boolean
}

export type InputType = {
  placeholder: string
  error?: boolean
  size?: 'normal' | 'big'
  disabled?: boolean
  type?: string
}

export type ModalType = {
  closeModal: any
}

export type MyOrderListType = {
  type?: string
  side?: string
  amount?: string
  price?: string
  filled?: string
  cancel?: string
}

export type ChoiceType = {
  selected: boolean
  setSelected: any
}

export type GetOrdersType = {
  isMarket: boolean
  tokenA?: string
  amountA?: number
  tokenB?: string
  amountB?: number
  orderPrice?: string
  user?: string
}

export type GetMyOrdersType = {
  user?: string
}