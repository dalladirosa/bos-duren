import React, { Component } from 'react'
import Header from './Header'
import History from './History'
import PropTypes from 'prop-types'
import { getOrders } from '../actions/orderActions'
import { connect } from 'react-redux'

class HistoryList extends Component {
  componentDidMount() {
    this.props.getOrders()
  }
  render() {
    const { orders } = this.props
    return (
      <React.Fragment>
        <Header title="My History" location="history" />
        <div className="cart">
          <ul className="cartWrap">
            {Object.keys(orders).map((key, index) => (
              <History
                key={key}
                index={index}
                order={orders[key]}
                count={index + 1}
              />
            ))}
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

HistoryList.propTypes = {
  orders: PropTypes.array.isRequired,
  getOrders: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  orders: state.order.orders
})

export default connect(
  mapStateToProps,
  { getOrders }
)(HistoryList)
