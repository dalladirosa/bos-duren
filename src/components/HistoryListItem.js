import React from 'react'

import { convertToRupiah } from '../Helpers'
import moment from 'moment'

export const HistoryListItem = ({ count, createdAt, pembayaran, total }) => (
  <li className={`items ${count % 2 === 0 ? 'even' : 'odd'}`}>
    <div className="infoWrap">
      <div className="cartSection">
        <h3>{moment(createdAt).format('MMMM Do, YYYY')}</h3>
        <p>Pembayaran :{convertToRupiah(pembayaran)}</p>
        <br />
        <p>
          Total Pembelian:
          {convertToRupiah(total)}
        </p>
      </div>
      <div className="prodTotal cartSection">
        <p>{convertToRupiah(pembayaran - total)}</p>
      </div>
    </div>
  </li>
)

export default HistoryListItem
