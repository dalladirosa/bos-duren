import React, { Component } from 'react'
import Header from './Header'

class HistoryList extends Component {
  render() {
    return (
      <React.Fragment>
        <Header title="My History" location="history" />
      </React.Fragment>
    )
  }
}

export default HistoryList
