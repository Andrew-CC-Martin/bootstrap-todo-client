import React from 'react'
import {
  func, string,
} from 'prop-types'
import { connect } from 'react-redux'

const handleSubmit = (e, todoInput, onAddTodo) => {
  e.preventDefault()
  onAddTodo(todoInput)
}

const InputTodo = ({ onAddTodo, todoInput, onUpdateTextInput }) => (
  <form onSubmit={(e) => handleSubmit(e, todoInput, onAddTodo)}>
    <input
      value={todoInput}
      onChange={({ target: { value } }) => onUpdateTextInput(value)}
      type='text'
    />
    <button type='submit'>create</button>
  </form>
)
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
