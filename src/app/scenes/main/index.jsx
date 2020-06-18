import React, { useEffect, useContext, useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { func } from 'prop-types'

import Context from '../../context/index'
import OuterContainer from './outer-container'
import InputTodo from './components/input-todo'
import TodoList from './components/todo-list'
import Header from '../components/header'

const Main = ({ onGetTodos }) => {
  const { apiBase } = useContext(Context)
  const [loadingTodos, setLoadingTodos] = useState(false)
  // on component mount, get todos from API
  useEffect(() => {
    const fetchTodos = async () => {
      setLoadingTodos(true)

      const jsonWebToken = await localStorage.getItem('jsonWebToken')
      const authConfig = {
        headers: {
          authorization: `${jsonWebToken}`,
        },
      }
      const { data: { todos } } = await axios.get(`${apiBase}/todos`, authConfig)
      onGetTodos(todos)
      setLoadingTodos(false)
    }

    fetchTodos()
  }, [])

  return (
    <>
      <OuterContainer>
        <Header />
        <InputTodo />
        <TodoList loading={loadingTodos} />
      </OuterContainer>
    </>
  )
}
Main.propTypes = {
  onGetTodos: func.isRequired,
}
const mapDispatchToProps = (dispatch) => ({
  onGetTodos: (value) => {
    dispatch({ type: 'INITIALISE_TODOS', value })
  },
})

export default connect(null, mapDispatchToProps)(Main)
