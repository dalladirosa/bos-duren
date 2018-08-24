import React from 'react'
import { convertToRupiah } from '../Helpers'

class TotalShopping extends React.Component {
  state = {
    pembayaran: '0'
  }

  inputPembayaran = (e) => {
    const jumlah = e.currentTarget.value
    this.setState({ pembayaran: jumlah })
  }
  render() {
    const productIds = Object.keys(this.props.product)
    const total = productIds.reduce((prevTotal, key) => {
      const product = this.props.product
      console.log()
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
            <li class="totalRow">
              <span class="label">Subtotal</span>
              <span class="value">{convertToRupiah(total)}</span>
            </li>

            <li class="totalRow">
              <span class="label">Pembayaran</span>
              <span class="value">
                {convertToRupiah(this.state.pembayaran)}
              </span>
            </li>

            <li className="totalRow final">
              <span className="label">Total</span>
              <span className="value">{convertToRupiah(totalKembalian)}</span>
            </li>
            <li className="totalRow">
              <a href="" className="btn continue">
                Checkout
              </a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default TotalShopping
