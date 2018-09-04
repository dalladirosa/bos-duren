import { combineReducers } from 'redux'
import productReducer from './productReducer'
import orderReducer from './orderReducer'
import filtersReducer from './filtersReducer'

export default combineReducers({
  product: productReducer,
  order: orderReducer,
  filters: filtersReducer
})
