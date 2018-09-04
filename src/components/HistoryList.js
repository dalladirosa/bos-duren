import React from 'react'
import HistoryListItem from './HistoryListItem'
import selectHistory from '../selector/HistorySelector'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const HistoryList = (props) => (
  <React.Fragment>
    <div className="cart">
      <ul className="cartWrap">
        {props.orders.length === 0 ? (
          <p>No Orders</p>
        ) : (
          props.orders.map((order, index) => {
            return (
              <HistoryListItem key={order.id} count={index + 1} {...order} />
            )
          })
        )}
      </ul>
    </div>
  </React.Fragment>
)

HistoryList.propTypes = {
  orders: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  orders: selectHistory(state.order.orders, state.filters)
})

export default connect(
  mapStateToProps,
  null
)(HistoryList)
