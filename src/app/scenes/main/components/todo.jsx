import React from 'react'
import {
  string, func, number,
} from 'prop-types'
import { connect } from 'react-redux'

import CloseButton from '../../components/close-button'

const Todo = ({ text, id, onDeleteTodo }) => (
  <>
    <p>{text}</p>
    <CloseButton onClose={() => onDeleteTodo(id)} />
  </>
)
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
