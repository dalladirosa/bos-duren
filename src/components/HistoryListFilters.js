import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sortByDate, sortByAmount } from '../actions/filterActions'

class HistoryListFilter extends Component {
  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate()
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount()
    }
  }
  render() {
    return (
      <div className="filter">
        <span>Sort Date: </span>
        <select
          value={this.props.filters.sortBy}
          className="select"
          onChange={this.onSortChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
})

export default connect(
  mapStateToProps,
  { sortByDate, sortByAmount }
)(HistoryListFilter)
