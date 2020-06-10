import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import 'babel-polyfill'

import App from './app/app'
import store from './app/redux/index'
import Context from './app/context'
import getApiBase from './app/config'

const apiBase = getApiBase()
const reactElement = document.getElementById('react')

ReactDOM.render(
  <Provider store={store}>
    <Context.Provider value={{ apiBase }}>
      <App />
    </Context.Provider>
  </Provider>,
  reactElement,
)
