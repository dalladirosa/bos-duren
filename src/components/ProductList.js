import React from 'react'
import TotalShopping from './TotalShopping'
import Product from './Product'
import PropTypes from 'prop-types'
import { getProducts } from '../actions/productActions'
import { connect } from 'react-redux'

class ProductList extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }
  render() {
    const { products } = this.props
    return (
      <React.Fragment>
        <div className="cart">
          <ul className="cartWrap">
            {Object.keys(products).map((key, index) => (
              <Product
                key={key}
                index={index}
                count={index + 1}
                length={products.length}
                product={products[key]}
              />
            ))}
          </ul>
        </div>
        <TotalShopping product={products} />
      </React.Fragment>
    )
  }
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  getProducts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: state.product.products
})

export default connect(
  mapStateToProps,
  { getProducts }
)(ProductList)
