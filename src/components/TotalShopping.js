import React from 'react'
import { convertToRupiah } from '../Helpers'

class TotalShopping extends React.Component {
  render() {
    const productIds = Object.keys(this.props.product)
    const totalSeluruh = productIds.reduce((prevTotal, key) => {
      const product = this.props.product
      console.log()
      return prevTotal + product[key].jumlah * product[key].harga
    }, 0)
    return (
      <div className="subtotal cf">
        <ul>
          <li className="totalRow final">
            <span className="label">Total</span>
            <span className="value">{convertToRupiah(totalSeluruh)}</span>
          </li>
          <li className="totalRow">
            <a href="" className="btn continue">
              Checkout
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default TotalShopping
