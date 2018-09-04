import { SORT_BY_DATE, SORT_BY_AMOUNT } from '../actions/types'

const initialState = {
  sortBy: 'date'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY_DATE:
      return {
        ...state,
        sortBy: 'date'
      }
    case SORT_BY_AMOUNT:
      return {
        ...state,
        sortBy: 'amount'
      }
    default:
      return state
  }
}
