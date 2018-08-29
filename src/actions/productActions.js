import { GET_PRODUCTS, CHANGE_JUMLAH } from './types'

export const getProducts = () => {
  return {
    type: GET_PRODUCTS
  }
}

export const changeJumlah = (id, jumlah) => {
  return {
    type: CHANGE_JUMLAH,
    id,
    jumlah
  }
}
