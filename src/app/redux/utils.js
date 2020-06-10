export const filterTodos = (id, oldState) => oldState.filter((todo) => todo.id !== id)

export const addTodo = ({ id, text }, oldState) => oldState.concat({ id, text })
