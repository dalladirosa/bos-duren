import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'
import { convertToRupiah } from '../Helpers'
import { addOrder } from '../actions/orderActions'
import { connect } from 'react-redux'

class TotalShopping extends React.Component {
  state = {
    pembayaran: 0
  }

  inputPembayaran = (e) => {
    const jumlah = e.currentTarget.value
    if (!jumlah || jumlah.match(/^\d+$/)) {
      this.setState({ pembayaran: jumlah })
    }
  }

  addOrder = (total, e) => {
    e.preventDefault()
    const newOrder = {
      date: Date.now(),
      id: uuid(),
      menu: this.props.product,
      pembayaran: this.state.pembayaran,
      total: total
    }
    const isZero = total && this.state.pembayaran !== 0
    if (isZero) {
      this.props.addOrder(newOrder)
      this.props.history.push('/history')
    }
  }

  render() {
    const productIds = Object.keys(this.props.product)
    const total = productIds.reduce((prevTotal, key) => {
      const product = this.props.product
      return prevTotal + product[key].jumlah * product[key].harga
    }, 0)
    const totalKembalian = this.state.pembayaran - total
    return (
      <React.Fragment>
        <div className="promoCode">
          <label htmlFor="promo">Jumlah pembayaran</label>
          <input
            type="number"
            name="pembayaran"
            placholder="Masukan jumlah pembayaran"
            value={this.state.pembayaran}
            onChange={this.inputPembayaran}
          />
          <a href="" className="btn" />
        </div>
        <div className="subtotal cf">
          <ul>
            <li className="totalRow">
              <span className="label">Pembayaran</span>
              <span className="value">
                {convertToRupiah(this.state.pembayaran)}
              </span>
            </li>

            <li className="totalRow">
              <span className="label">Subtotal</span>
              <span className="value">{convertToRupiah(total)}</span>
            </li>

            <li className="totalRow final">
              <span className="label">Total</span>
              <span className="value">{convertToRupiah(totalKembalian)}</span>
            </li>
            <li className="totalRow">
              <form onSubmit={(e) => this.addOrder(total, e)}>
                <button type="submit" className="btn continue">
                  Checkout
                </button>
              </form>
            </li>
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

TotalShopping.propTypes = {
  addOrder: PropTypes.func.isRequired
}

export default connect(
  null,
  { addOrder }
)(TotalShopping)
