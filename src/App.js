import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

import ProductList from './components/ProductList'

import './css/style.css'
import HistoryDashboardPage from './components/HistoryDashboardPage'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="wrap cf">
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route exact path="/history" component={HistoryDashboardPage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}
export default App
