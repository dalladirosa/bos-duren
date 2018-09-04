import { SORT_BY_DATE, SORT_BY_AMOUNT } from './types'

export const sortByDate = (sortBy) => ({
  type: SORT_BY_DATE,
  sortBy
})

export const sortByAmount = (sortBy) => ({
  type: SORT_BY_AMOUNT,
  sortBy
})
