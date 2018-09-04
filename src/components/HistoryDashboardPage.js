import React from 'react'
import HistoryList from './HistoryList'
import HistoryListFilters from './HistoryListFilters'
import Header from './Header'

const HistoryDashboardPage = () => (
  <div>
    <Header title="My History" location="history" />
    <HistoryListFilters />
    <HistoryList />
  </div>
)

export default HistoryDashboardPage
