import React, { useState, useContext } from 'react'
import { func } from 'prop-types'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'

import Context from '../../context/index'
import { SubmitButton } from '../components/basic-button'
import Header from '../components/header'

const Signup = ({ setLoggedIn }) => {
  const { apiBase } = useContext(Context)
  // todo - add frontend validation for email and password
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
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
      const { data: { jsonWebToken } } = await axios.put(`${apiBase}/users/add`, { fullName, email, rawPassword })
      localStorage.setItem('jsonWebToken', jsonWebToken)
      setRedirect(true)
      setLoggedIn()
    } catch (err) {
      setLoading(false)
      console.log(`couldn't create user. ${err}`)
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
      <Header text='Sign Up' />
      <form onSubmit={handleSubmit}>
        <label>
          email
          <input
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            type='text'
            disabled={loading}
          />
        </label>

        <label>
          name
          <input
            value={fullName}
            onChange={({ target: { value } }) => setFullName(value)}
            type='text'
            disabled={loading}
          />
        </label>

        <label>
          password
          <input
            value={rawPassword}
            onChange={({ target: { value } }) => setPassword(value)}
            type={passwordInputType}
            disabled={loading}
          />
          <input
            type='checkbox'
            onClick={toggleShowHide}
            value={showPassword}
          />
          show
        </label>
        <SubmitButton disabled={loading} text='sign up' />
      </form>
    </>
  )
}
Signup.propTypes = {
  setLoggedIn: func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  setLoggedIn: () => {
    dispatch({ type: 'SET_LOGGED_IN' })
  },
})

export default connect(null, mapDispatchToProps)(Signup)
