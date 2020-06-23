export const filterTodos = (id, oldState) => oldState.filter((todo) => todo.id !== id)

export const addTodo = ({ id, text, isDone }, oldState) => oldState.concat({ id, text, isDone })

export const updateTodo = (value, oldState) => {
  const withOldRemoved = filterTodos(value.id, oldState)
  const withUpdatedAdded = addTodo(value, withOldRemoved)
  return withUpdatedAdded.sort((a, b) => a.isDone - b.isDone)
}
