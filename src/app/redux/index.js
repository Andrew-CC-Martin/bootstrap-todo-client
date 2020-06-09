import { createStore, combineReducers, compose } from 'redux'

import { filterTodos, addTodo } from './utils'

const { NODE_ENV } = process.env
const isDevelopment = NODE_ENV === 'development'

const reducers = {
  todos: (oldState = [], { type, value }) => {
    switch (type) {
      case 'ADD_TODO':
        return addTodo(value, oldState)

      case 'DELETE_TODO':
        return filterTodos(value, oldState)

      default:
        return oldState
    }
  },
  todoInput: (oldState = '', { type, input }) => {
    switch (type) {
      case 'UPDATE_TEXT_INPUT':
        return input

      default:
        return oldState
    }
  },
}

const slices = combineReducers({ ...reducers })

// Set up redux dev tools
const composeEnhancers = isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })
  : compose

const store = createStore(
  slices,
  composeEnhancers(),
)

export default store
