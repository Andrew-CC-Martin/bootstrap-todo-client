import React from 'react'

// style
import GlobalStyle from './global-style'

// components
import OuterContainer from './scenes/main/outer-container'
import InputTodo from './scenes/main/components/input-todo'
import TodoList from './scenes/main/components/todo-list'

const App = () => (
  <>
    <OuterContainer>
      <h1>Todo List</h1>
      <InputTodo />
      <TodoList />
    </OuterContainer>
    <GlobalStyle />
  </>
)

export default App
