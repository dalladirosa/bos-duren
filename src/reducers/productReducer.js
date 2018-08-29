import { GET_PRODUCTS, CHANGE_JUMLAH } from '../actions/types'

const initialState = {
  products: [
    { id: 1, nama: 'Kelapa Duren', harga: 14000, jumlah: 0 },
    { id: 2, nama: 'Kelapa Duren Milo', harga: 17000, jumlah: 0 },
    { id: 3, nama: 'Kelapa', harga: 9000, jumlah: 0 },
    { id: 4, nama: 'Kepal Duren', harga: 19000, jumlah: 0 }
  ]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state
      }
    case CHANGE_JUMLAH:
      state.products[action.id].jumlah = action.jumlah
      return {
        ...state,
        products: [...state.products]
      }
    default:
      return state
  }
}
