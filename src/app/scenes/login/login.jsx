import React, { useState, useContext } from 'react'
import axios from 'axios'

import Context from '../../context/index'

const Signup = () => {
  const { apiBase } = useContext(Context)
  const [email, setEmail] = useState('')
  const [rawPassword, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await axios.get(`${apiBase}/users/login`, { email, rawPassword })
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
        <h1>Log In</h1>
      </header>
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
            value={email}
            onChange={({ target: { value } }) => setPassword(value)}
            type='text'
            disabled={loading}
            id='password'
          />
        </label>
      </form>
    </>
  )
}

export default Signup
