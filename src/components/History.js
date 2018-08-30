import React, { Component } from 'react'

import { convertToRupiah } from '../Helpers'
import moment from 'moment'

class History extends Component {
  render() {
    const { index, order } = this.props
    console.log(order)
    return (
      <li
        key={index}
        className={`items ${this.props.count % 2 === 0 ? 'even' : 'odd'}`}
      >
        <div className="infoWrap">
          <div className="cartSection">
            <h3>{moment(order.date).format('MMMM Do, YYYY')}</h3>
            <p>Pembayaran :{convertToRupiah(order.pembayaran)}</p>
            <br />
            <p>
              Total Pembelian:
              {convertToRupiah(order.total)}
            </p>
          </div>
          <div className="prodTotal cartSection">
            <p>{convertToRupiah(order.pembayaran - order.total)}</p>
          </div>
        </div>
      </li>
    )
  }
}

export default History
