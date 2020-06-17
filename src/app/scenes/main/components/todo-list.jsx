import React from 'react'
import {
  arrayOf, shape, number, string, bool,
} from 'prop-types'
import { connect } from 'react-redux'

import Todo from './todo'
import Loader from '../../components/loader'

const TodoList = ({ todos, loading }) => (
  <>
    {
      loading
        ? <Loader />
        : (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
            />
          ))
        )
    }
  </>
)
TodoList.propTypes = {
  todos: arrayOf(shape({
    id: number,
    text: string,
  })),
  loading: bool.isRequired,
}
TodoList.defaultProps = {
  todos: [],
}

const mapStateToProps = ({ todos }) => ({ todos })

export default connect(mapStateToProps)(TodoList)
