import React from 'react'
import { convertToRupiah } from '../Helpers'
import { changeJumlah } from '../actions/productActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class ProductListItem extends React.Component {
  state = {
    id: this.props.product.id,
    nama: this.props.product.nama,
    harga: this.props.product.harga,
    jumlah: this.props.product.jumlah
  }

  onAmountChange = (index, e) => {
    const jumlah = e.currentTarget.value
    if (!jumlah || jumlah.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.props.changeJumlah(index, jumlah)
      this.setState(() => ({ jumlah }))
    }
  }

  renderSpecial = () =>
    this.props.length === this.props.count ? (
      <div className="special">
        <div className="specialContent">Total Harga</div>
      </div>
    ) : null

  // handleChange = (e) => {
  //   update that fish
  //   1. Take a copy of the current fish
  //   const updatedProduct = {
  //     ...this.props.product,
  //     [e.currentTarget.name]: e.currentTarget.value
  //   this.props.addJumlah(this.props.product, updatedProduct)
  // }

  render() {
    const { id, nama, harga, jumlah } = this.state
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
                onChange={(e) => this.onAmountChange(this.props.index, e)}
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
        {this.renderSpecial()}
      </li>
    )
  }
}

ProductListItem.propTypes = {
  changeJumlah: PropTypes.func.isRequired
}

export default connect(
  null,
  { changeJumlah }
)(ProductListItem)
