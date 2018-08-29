import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

import HistoryList from './components/HistoryList'
import ProductList from './components/ProductList'
import Header from './components/Header'
import './css/style.css'

class App extends React.Component {
  state = {
    order: []
  }

  // addJumlah = (key, update) => {
  //   const product = [...this.state.product]
  //   const index = product.indexOf(key)
  //   product[index] = update

  //   this.setState({ product })
  // }

  addOrder = (newOrder) => {
    this.setState({ order: [...this.state.order, newOrder] })
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="wrap cf">
            <Header title="My Cart" />
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route exact path="/history" component={HistoryList} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}
export default App
