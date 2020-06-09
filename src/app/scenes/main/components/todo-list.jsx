import React from 'react'
import {
  arrayOf, shape, number, string,
} from 'prop-types'
import { connect } from 'react-redux'

import Todo from './todo'

const TodoList = ({ todos }) => (
  <>
    {
      todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          id={todo.id}
          text={todo.text}
        />
      ))
    }
  </>
)
TodoList.propTypes = {
  todos: arrayOf(shape({
    id: number,
    text: string,
  })),
}
TodoList.defaultProps = {
  todos: [],
}

const mapStateToProps = ({ todos }) => ({ todos })

export default connect(mapStateToProps)(TodoList)
