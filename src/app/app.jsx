import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { bool, func } from 'prop-types'
import { connect } from 'react-redux'
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom'

import Context from './context/index'
import GlobalStyle from './global-style'
import Main from './scenes/main/index'
import Signup from './scenes/signup/signup'
import Login from './scenes/login/login'
import Loader from './scenes/components/loader'

const App = ({ loggedIn, setLoggedIn }) => {
  // Don't allow app to render until the jwt has been checked
  const [canRender, setCanRender] = useState(false)
  const { apiBase } = useContext(Context)

  // On component mount, check for presence of jwt
  // If it's there, set loggedIn to true in redux
  useEffect(() => {
    const checkJwt = async () => {
      axios.get(`${apiBase}/wakeup`)
      const jsonWebToken = await localStorage.getItem('jsonWebToken')
      if (jsonWebToken) {
        setLoggedIn(true)
      }

      setCanRender(true)
    }

    checkJwt()
  }, [])

  if (!canRender) {
    return <Loader />
  }

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/login'>
            {loggedIn ? <Redirect to='/todos' /> : <Login />}
          </Route>
          <Route path='/signup'>
            {loggedIn ? <Redirect to='/todos' /> : <Signup />}
          </Route>
          <Route path='/todos'>
            {loggedIn ? <Main /> : <Redirect to='/login' />}
          </Route>
          <Route path='/'>
            <Redirect to='/todos' />
          </Route>
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}
App.propTypes = {
  setLoggedIn: func.isRequired,
  loggedIn: bool.isRequired,
}

const mapStateToProps = ({ loggedIn }) => ({ loggedIn })

const mapDispatchToProps = (dispatch) => ({
  setLoggedIn: () => {
    dispatch({ type: 'SET_LOGGED_IN' })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
