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
  type?: boolean
  side?: string
  amount?: string
  price?: string
  filled?: string
  status?: string
  cancel?: boolean
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