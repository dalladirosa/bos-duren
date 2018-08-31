import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import store from './store'
import { Provider } from 'react-redux'

import './css/style.css'

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))
