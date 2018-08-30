import { GET_ORDERS, ADD_ORDER } from './types'

export const getOrders = () => {
  return {
    type: GET_ORDERS
  }
}
export const addOrder = (order) => {
  return {
    type: ADD_ORDER,
    payload: order
  }
}
