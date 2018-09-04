export default (orders, { sortBy }) => {
  return orders.sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'amount') {
      return a.total < b.total ? 1 : -1
    }
  })
}
