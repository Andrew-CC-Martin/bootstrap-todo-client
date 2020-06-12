export const filterTodos = (id, oldState) => oldState.filter((todo) => todo.id !== id)

export const addTodo = ({ id, text }, oldState) => oldState.concat({ id, text })

export const updateTodo = (value, oldState) => {
  const withOldRemoved = filterTodos(value.id, oldState)
  const withUpdatedAdded = addTodo(value, withOldRemoved)
  return withUpdatedAdded.sort(((a, b) => a.id - b.id))
}
