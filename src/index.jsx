import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'

import App from './app/app'
import store from './app/redux/index'

const reactElement = document.getElementById('react')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  reactElement,
)
