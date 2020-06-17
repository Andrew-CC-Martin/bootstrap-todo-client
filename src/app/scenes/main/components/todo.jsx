import React, { useContext, useState } from 'react'
import {
  string, func, number, bool, shape,
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
    margin-right: 10px;
    width: 60%;
  }

  p {
    color: ${(props) => props.isDone ? colorPallette.middleBluePurple : 'black'};
    text-decoration: ${(props) => props.isDone ? 'line-through' : 'none'};
  }

  label {
    width: 100%;
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
  todo: { text, id, isDone }, onDeleteTodo, onUpdateTodo,
}) => {
  const { apiBase } = useContext(Context)
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [todoInput, setTodoInput] = useState(text)
  const [isDoneCheckBox, setIsDoneCheckBox] = useState(isDone)

  const toggleIsDone = () => {
    setIsDoneCheckBox((oldState) => !oldState)
  }

  const handleUpdateTodo = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const jsonWebToken = await localStorage.getItem('jsonWebToken')
      const authConfig = {
        headers: {
          authorization: `${jsonWebToken}`,
        },
      }

      await axios.put(
        `${apiBase}/todos/update/${id}`, { todoInput, isDone: isDoneCheckBox }, authConfig,
      )

      // Update todos list in redux
      onUpdateTodo({ id, text: todoInput, isDone: isDoneCheckBox })
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
      const jsonWebToken = await localStorage.getItem('jsonWebToken')
      const authConfig = {
        headers: {
          authorization: `${jsonWebToken}`,
        },
      }

      await axios.delete(`${apiBase}/todos/delete/${id}`, authConfig)

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
    <StyleWrapper isDone={isDone}>
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

              <div>
                <label htmlFor='isDoneCheckBox'>
                  mark as done?
                </label>
                <input
                  type='checkbox'
                  name='isDoneCheckBox'
                  onChange={toggleIsDone}
                  checked={isDoneCheckBox}
                  disabled={loading}
                />
              </div>

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
  todo: shape({
    text: string.isRequired,
    id: number.isRequired,
    isDone: bool.isRequired,
  }).isRequired,
  onDeleteTodo: func.isRequired,
  onUpdateTodo: func.isRequired,
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
