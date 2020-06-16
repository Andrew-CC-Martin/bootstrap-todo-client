import React, { useState, useContext } from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import Context from '../../context/index'
import { SubmitButton } from '../components/basic-button'
import Header from '../components/header'

const Login = ({ setLoggedIn }) => {
  const { apiBase } = useContext(Context)
  const [email, setEmail] = useState('')
  const [rawPassword, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowHide = () => {
    setShowPassword((oldState) => !oldState)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { data: { jsonWebToken } } = await axios.post(`${apiBase}/users/login`, { email, rawPassword })

      localStorage.setItem('jsonWebToken', jsonWebToken)
      setRedirect(true)
      setLoggedIn()
    } catch (err) {
      console.log(`couldn't log in. error: ${err}`)
      setLoading(false)
    }
  }

  if (redirect) {
    return (
      <Redirect to='/todos' />
    )
  }

  const passwordInputType = showPassword ? 'text' : 'password'

  return (
    <>
      <Header text='Log In' />
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>
          <input
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            type='text'
            disabled={loading}
            id='email'
          />
        </label>
        <label htmlFor='password'>
          <input
            value={rawPassword}
            onChange={({ target: { value } }) => setPassword(value)}
            type={passwordInputType}
            disabled={loading}
            id='password'
          />
          <input
            type='checkbox'
            onClick={toggleShowHide}
            value={showPassword}
          />
        </label>
        <SubmitButton disabled={loading} text='log in' />
      </form>
      <Link to='/signup'>
        <p>I&apos;m new</p>
      </Link>
    </>
  )
}
Login.propTypes = {
  setLoggedIn: func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  setLoggedIn: () => {
    dispatch({ type: 'SET_LOGGED_IN' })
  },
})

export default connect(null, mapDispatchToProps)(Login)
