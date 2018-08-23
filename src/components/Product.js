import React from 'react'
import { convertToRupiah } from '../Helpers'

class Product extends React.Component {
  renderSpecial = () =>
    this.props.length === this.props.count + 1 ? (
      ''
    ) : (
      <div className="special">
        <div className="specialContent">Total Harga</div>
      </div>
    )

  handleChange = (event) => {
    // update that fish
    // 1. Take a copy of the current fish
    const updatedProduct = {
      ...this.props.product,
      [event.currentTarget.name]: event.currentTarget.value
    }
    this.props.addJumlah(this.props.product, updatedProduct)
  }

  render() {
    const { id, nama, harga, jumlah } = this.props.product
    return (
      <li
        key={id}
        className={`items ${this.props.count % 2 === 0 ? 'even' : 'odd'}`}
      >
        <div className="infoWrap">
          <div className="cartSection">
            <img
              className="itemImg"
              src="http://pluspng.com/img-png/png-durian-download-1100.png"
              alt="PNG Durian"
            />
            <h3>{nama}</h3>
            <p>
              <input
                style={{ width: 45 }}
                type="number"
                name="jumlah"
                className="qty"
                value={jumlah}
                onChange={this.handleChange}
              />
              x {convertToRupiah(harga)}
            </p>
          </div>

          <div className="prodTotal cartSection">
            <p>{convertToRupiah(harga * jumlah)}</p>
          </div>
          <div className="cartSection removeWrap">
            <a href="" className="remove">
              x
            </a>
          </div>
        </div>
        {this.renderSpecial(id)}
      </li>
    )
  }
}

export default Product
