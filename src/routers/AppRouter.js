import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductList from '../components/ProductList'
import HistoryList from '../components/HistoryList'

const AppRouter = () => (
  <Router>
    <div className="wrap cf">
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/history" component={HistoryList} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
