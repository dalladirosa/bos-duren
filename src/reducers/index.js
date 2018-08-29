import { combineReducers } from 'redux'
import productReducer from './productReducer'
import orderReducer from './orderReducer'

export default combineReducers({
  product: productReducer,
  order: orderReducer
})
