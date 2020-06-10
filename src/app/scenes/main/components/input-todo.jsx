import React, { useContext } from 'react'
import {
  func, string,
} from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'

import Context from '../../../context'

const handleSubmit = async (e, todoInput, onAddTodo, apiBase) => {
  e.preventDefault()
  try {
    const { data } = await axios.post(`${apiBase}/todos/add`, { todoInput })

    onAddTodo(data)
  } catch (err) {
    console.log(`couldn't add todo. error: ${err}`)
  }
}

const InputTodo = ({ onAddTodo, todoInput, onUpdateTextInput }) => {
  const { apiBase } = useContext(Context)

  return (
    <form onSubmit={(e) => handleSubmit(e, todoInput, onAddTodo, apiBase)}>
      <input
        value={todoInput}
        onChange={({ target: { value } }) => onUpdateTextInput(value)}
        type='text'
      />
      <button type='submit'>create</button>
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
