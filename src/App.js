import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import store from './store'
<<<<<<< HEAD

import ProductList from './components/ProductList'
=======
import { Provider } from 'react-redux'
>>>>>>> 6cc6d39a00c238c2a5e6ee0f3a7f321d23efde89

import './css/style.css'
import HistoryDashboardPage from './components/HistoryDashboardPage'

<<<<<<< HEAD
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
=======
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))
>>>>>>> 6cc6d39a00c238c2a5e6ee0f3a7f321d23efde89
