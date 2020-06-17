import React, { useState, useContext } from 'react'
import { func } from 'prop-types'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
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
  .signup__checkbox {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }
  .signup__email {
    margin-bottom: 10px;
  }
  .signup__fullName {
    margin-bottom: 10px;
  }
  .signup__submit-button {
    display: flex;
    justify-content: center;
  }
`

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
      <Header />
      <StyleWrapper>
        <form onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            type='text'
            disabled={loading}
            name='email'
          />
          <label htmlFor='email' className='signup__email'>
            email
          </label>

          <input
            value={fullName}
            onChange={({ target: { value } }) => setFullName(value)}
            type='text'
            disabled={loading}
            name='fullName'
          />
          <label htmlFor='fullName' className='signup__fullName'>
            name
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

          <div className='signup__checkbox'>
            <input
              type='checkbox'
              onChange={toggleShowHide}
              checked={showPassword}
              name='checkbox'
            />
            <label htmlFor='checkbox'>
              show
            </label>
          </div>

          <div className='signup__submit-button'>
            <SubmitButton disabled={loading} text='sign up' />
          </div>
        </form>
      </StyleWrapper>
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
