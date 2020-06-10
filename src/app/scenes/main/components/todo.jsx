import React, { useContext } from 'react'
import {
  string, func, number,
} from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'

import CloseButton from '../../components/close-button'
import Context from '../../../context'

const handleDeleteTodo = async (id, onDeleteTodo, apiBase) => {
  try {
    await axios.delete(`${apiBase}/todos/delete/${id}`)

    onDeleteTodo(id)
  } catch (err) {
    console.log(`couldn't delete todo. error: ${err}`)
  }
}

const Todo = ({ text, id, onDeleteTodo }) => {
  const { apiBase } = useContext(Context)

  return (
    <>
      <p>{text}</p>
      <CloseButton onClose={() => handleDeleteTodo(id, onDeleteTodo, apiBase)} />
    </>
  )
}
Todo.propTypes = {
  text: string.isRequired,
  onDeleteTodo: func.isRequired,
  id: number.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  onDeleteTodo: (value) => {
    dispatch({ type: 'DELETE_TODO', value })
  },
})

export default connect(null, mapDispatchToProps)(Todo)
