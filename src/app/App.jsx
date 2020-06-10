import React, { useEffect, useContext } from 'react'
import { connect } from 'react-redux'
import { func } from 'prop-types'
import axios from 'axios'

// style
import GlobalStyle from './global-style'

// components
import OuterContainer from './scenes/main/outer-container'
import InputTodo from './scenes/main/components/input-todo'
import TodoList from './scenes/main/components/todo-list'

// state
import Context from './context'

const App = ({ onGetTodos }) => {
  const { apiBase } = useContext(Context)

  // on App mount, get todos from API
  useEffect(() => {
    const fetchTodos = async () => {
      const { data: { todos } } = await axios.get(`${apiBase}/todos`)
      onGetTodos(todos)
    }

    fetchTodos()
  }, [])

  return (
    <>
      <OuterContainer>
        <h1>Todo List</h1>
        <InputTodo />
        <TodoList />
      </OuterContainer>
      <GlobalStyle />
    </>
  )
}
App.propTypes = {
  onGetTodos: func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  onGetTodos: (value) => {
    dispatch({ type: 'INITIALISE_TODOS', value })
  },
})

export default connect(null, mapDispatchToProps)(App)
