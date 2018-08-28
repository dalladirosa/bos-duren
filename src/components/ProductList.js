import React from 'react'
import TotalShopping from './TotalShopping'
import Product from './Product'

const ProductList = (props) => (
  <React.Fragment>
    <div className="cart">
      <ul className="cartWrap">
        {Object.keys(props.product).map((key, index) => (
          <Product
            key={key}
            index={index}
            count={index + 1}
            length={props.length}
            product={props.product[key]}
            addJumlah={props.addJumlah}
          />
        ))}
      </ul>
    </div>
    <TotalShopping product={props.product} addOrder={props.addOrder} />
  </React.Fragment>
)

export default ProductList
