import React from 'react'
import ProductList from './components/ProductList'
import Header from './components/Header'
import './css/style.css'

class App extends React.Component {
  state = {
    product: [
      { id: 1, nama: 'Es Kelapa Duren', harga: 14000, jumlah: 0 },
      { id: 2, nama: 'Es Kelapa Duren Milo', harga: 17000, jumlah: 0 },
      { id: 3, nama: 'Es Kelapa', harga: 9000, jumlah: 0 },
      { id: 4, nama: 'Es Kepal Duren', harga: 19000, jumlah: 0 }
    ],
    order: [{ jumlah: 0 }, { jumlah: 0 }]
  }

  addJumlah = (key, update) => {
    const product = [...this.state.product]
    const index = product.indexOf(key)
    product[index] = update

    this.setState({ product })
  }

  render() {
    const length = this.state.product.length
    return (
      <div className="wrap cf">
        <Header />
        <ProductList
          length={length}
          product={this.state.product}
          addJumlah={this.addJumlah}
        />
      </div>
    )
  }
}

export default App
