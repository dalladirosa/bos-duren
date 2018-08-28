import React from 'react'
import { convertToRupiah } from '../Helpers'
import uuid from 'uuid'
import moment from 'moment'

class TotalShopping extends React.Component {
  state = {
    pembayaran: 0
  }

  inputPembayaran = (e) => {
    const jumlah = parseInt(e.currentTarget.value)
    this.setState({ pembayaran: jumlah })
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
    this.props.addOrder(newOrder)
  }

  render() {
    const productIds = Object.keys(this.props.product)
    const total = productIds.reduce((prevTotal, key) => {
      const product = this.props.product
      return prevTotal + product[key].jumlah * product[key].harga
    }, 0)
    const totalKembalian = total - this.state.pembayaran
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

export default TotalShopping
