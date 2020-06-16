import React, { useState, useContext } from 'react'
import axios from 'axios'

import Context from '../../context/index'
import { SubmitButton } from '../components/basic-button'

const Signup = () => {
  const { apiBase } = useContext(Context)
  // todo - add frontend validation for email and password
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [rawPassword, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await axios.put(`${apiBase}/users/add`, { fullName, email, rawPassword })
      console.log('handleSubmit -> response', response)
    } catch (err) {
      console.log(`couldn't create user. error: ${err}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <header>
        <h1>Sign Up</h1>
      </header>
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
            type='text'
            disabled={loading}
          />
        </label>
        <SubmitButton disabled={loading} text='sign up' />
      </form>
    </>
  )
}

export default Signup
