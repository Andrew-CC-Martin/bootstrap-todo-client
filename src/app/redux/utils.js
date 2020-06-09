import cloneDeep from 'lodash/cloneDeep'

export const filterTodos = (id, oldState) => oldState.filter((todo) => todo.id !== id)

export const addTodo = (text, oldState) => {
  if (oldState.length === 0) {
    return [{
      id: 0,
      text,
    }]
  }

  const newTodos = cloneDeep(oldState)
  const newId = oldState[oldState.length - 1].id + 1
  newTodos.push({
    id: newId,
    text,
  })
  return newTodos
}
