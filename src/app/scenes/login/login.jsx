import React, { useState, useContext } from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

import Context from '../../context/index'
import { SubmitButton } from '../components/basic-button'
import Header from '../components/header'

const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    justify-content: space-between;
  }
  input {
    margin-bottom: 10px;
  }
  .login__checkbox {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }
  .login__email {
    margin-bottom: 10px;
  }
  .login__submit-button {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
  p {
    margin-bottom: 30px;
  }
`

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
      <Header />
      <StyleWrapper>
        <form onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            name='email'
            type='text'
            disabled={loading}
          />
          <label htmlFor='password' className='login__email'>
            email
          </label>

          <input
            value={rawPassword}
            onChange={({ target: { value } }) => setPassword(value)}
            type={passwordInputType}
            disabled={loading}
            name='password'
          />
          <label htmlFor='password'>
            password
          </label>

          <div className='login__checkbox'>
            <input
              type='checkbox'
              onChange={toggleShowHide}
              checked={showPassword}
              name='password-checkbox'
            />
            <label htmlFor='password-checkbox'>
              show
            </label>
          </div>

          <div className='login__submit-button'>
            <SubmitButton disabled={loading} text='log in' />
          </div>
        </form>
        <p>or</p>
        <a href='/signup'>Sign Up</a>
      </StyleWrapper>
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
