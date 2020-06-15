import React, { useContext, useState } from 'react'
import {
  string, func, number,
} from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'
import styled from 'styled-components'

import CloseButton from '../../components/close-button'
import { BasicButton, SubmitButton } from '../../components/basic-button'
import Context from '../../../context'
import { colorPallette } from '../../../constants'

const StyleWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  border: 1px solid ${colorPallette.darkPurple};
  border-radius: 5px;
  padding: 10px;

  form {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  input {
    width: 70%;
    @media (min-width: 800px) {
      width: 50%;
    }
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  min-width: 30%;
  justify-content: flex-end;
  button {
    margin-right: 5px;
    @media (min-width: 800px) {
      margin-right: 20px;
    }
  }
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
    setLoading(true)
    try {
      await axios.delete(`${apiBase}/todos/delete/${id}`)

      onDeleteTodo(id)
    } catch (err) {
      console.log(`couldn't delete todo. error: ${err}`)
    } finally {
      setLoading(true)
    }
  }

  const cancelEditing = () => {
    setIsEditing(true)
    setTodoInput(text)
  }

  return (
    <StyleWrapper>
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
              <ButtonsWrapper>
                <SubmitButton disabled={loading} text='save' />
                <BasicButton onClick={() => setIsEditing(false)} text='cancel' />
              </ButtonsWrapper>
            </form>
          )
          : (
            <>
              <BasicButton onClick={cancelEditing} text='✎' disabled={loading} />
              <p>{text}</p>
              <CloseButton onClose={handleDeleteTodo} disabled={loading} />
            </>
          )
      }
    </StyleWrapper>
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
