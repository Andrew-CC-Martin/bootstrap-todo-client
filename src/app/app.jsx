import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import GlobalStyle from './global-style'
import Main from './scenes/main/index'
import Signup from './scenes/signup/signup'
import Login from './scenes/login/login'

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/'>
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
    <GlobalStyle />
  </>
)

export default App
