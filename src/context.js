import React, { Component } from 'react'

const Context = React.createContext()
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_JUMLAH':
      console.log(action.payload)
      const product = [...this.state.product]
      const index = product.indexOf(action.payload)
      //   product[index] = updatedProduct.payload
      return {
        ...state,
        product: product
      }
    default:
      return state
  }
}

export class Provider extends Component {
  state = {
    product: [
      { id: 1, nama: 'Es Kelapa Duren', harga: 14000, jumlah: 0 },
      { id: 2, nama: 'Es Kelapa Duren Milo', harga: 17000, jumlah: 0 },
      { id: 3, nama: 'Es Kelapa', harga: 9000, jumlah: 0 },
      { id: 4, nama: 'Es Kepal Duren', harga: 19000, jumlah: 0 }
    ],
    dispatch: (action) => this.setState((state) => reducer(state, action))
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer
