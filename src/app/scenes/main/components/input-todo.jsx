import React, { useContext, useState } from 'react'
import {
  func, string,
} from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'

import Context from '../../../context'

const handleSubmit = async (e, todoInput, onAddTodo, apiBase, setLoading) => {
  e.preventDefault()
  setLoading(true)
  try {
    const { data } = await axios.post(`${apiBase}/todos/add`, { todoInput })

    onAddTodo(data)
  } catch (err) {
    console.log(`couldn't add todo. error: ${err}`)
  } finally {
    setLoading(false)
  }
}

const InputTodo = ({ onAddTodo, todoInput, onUpdateTextInput }) => {
  const { apiBase } = useContext(Context)
  const [loading, setLoading] = useState(false)

  return (
    <form onSubmit={(e) => handleSubmit(e, todoInput, onAddTodo, apiBase, setLoading)}>
      <input
        value={todoInput}
        onChange={({ target: { value } }) => onUpdateTextInput(value)}
        type='text'
        disabled={loading}
      />
      <button type='submit' disabled={loading}>create</button>
    </form>
  )
}
InputTodo.propTypes = {
  onAddTodo: func.isRequired,
  todoInput: string.isRequired,
  onUpdateTextInput: func.isRequired,
}

const mapStateToProps = ({ todoInput, todos }) => ({ todoInput, todos })

const mapDispatchToProps = (dispatch) => ({
  onAddTodo: (value) => {
    dispatch({ type: 'ADD_TODO', value })
    dispatch({ type: 'UPDATE_TEXT_INPUT', input: '' })
  },
  onUpdateTextInput: (input) => {
    dispatch({ type: 'UPDATE_TEXT_INPUT', input })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(InputTodo)
