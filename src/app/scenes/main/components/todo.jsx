import React, { useContext, useState } from 'react'
import {
  string, func, number,
} from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'
import styled from 'styled-components'

import CloseButton from '../../components/close-button'
import Context from '../../../context'

const Wrapper = styled.div`
  display: flex;
`

const Todo = ({
  text, id, onDeleteTodo, onUpdateTodo,
}) => {
  const { apiBase } = useContext(Context)
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [todoInput, setTodoInput] = useState(text)

  const handleUpdateTodo = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.put(`${apiBase}/todos/update/${id}`, { todoInput })

      // Update todos list in redux
      onUpdateTodo({ id, text: todoInput })
    } catch (err) {
      console.log(`couldn't update todo. error: ${err}`)
    } finally {
      setLoading(false)
      setIsEditing(false)
    }
  }

  const handleDeleteTodo = async () => {
    try {
      await axios.delete(`${apiBase}/todos/delete/${id}`)

      onDeleteTodo(id)
    } catch (err) {
      console.log(`couldn't delete todo. error: ${err}`)
    }
  }

  const cancelEditing = () => {
    setIsEditing(true)
    setTodoInput(text)
  }

  return (
    <Wrapper>
      {
        isEditing
          ? (
            <form
              onSubmit={
                (e) => handleUpdateTodo(e)
              }
            >
              <input
                value={todoInput}
                onChange={({ target: { value } }) => setTodoInput(value)}
                type='text'
                disabled={loading}
              />
              <button type='submit' disabled={loading}>update</button>
              <button type='button' onClick={() => setIsEditing(false)}>cancel</button>
            </form>
          )
          : (
            <>
              <button type='button' onClick={cancelEditing}>
                <span role='img'>️✎</span>
              </button>
              <p>{text}</p>
              <CloseButton onClose={handleDeleteTodo} />
            </>
          )
      }
    </Wrapper>
  )
}
Todo.propTypes = {
  text: string.isRequired,
  onDeleteTodo: func.isRequired,
  onUpdateTodo: func.isRequired,
  id: number.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  onDeleteTodo: (value) => {
    dispatch({ type: 'DELETE_TODO', value })
  },
  onUpdateTodo: (value) => {
    dispatch({ type: 'UPDATE_TODO', value })
  },
})

export default connect(null, mapDispatchToProps)(Todo)
