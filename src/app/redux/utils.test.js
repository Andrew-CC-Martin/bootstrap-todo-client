import { filterTodos, addTodo } from './utils'

describe('app > redux > utils > filterTodos', () => {
  const todosBefore = [
    {
      id: 0,
      text: 'buy milk',
    },
    {
      id: 1,
      text: 'go to post office',
    },
    {
      id: 2,
      text: 'do laundry',
    },
  ]

  const todosAfter = [
    {
      id: 0,
      text: 'buy milk',
    },
    {
      id: 2,
      text: 'do laundry',
    },
  ]

  it('removes items from todo array based on given id', () => {
    expect(filterTodos(1, todosBefore)).toEqual(todosAfter)
  })

  it('doesnt remove item if id isnt found', () => {
    expect(filterTodos(3, todosBefore)).toEqual(todosBefore)
  })

  it('doesnt mutate state', () => {
    expect(filterTodos(3, todosBefore)).not.toBe(todosBefore)
  })
})

describe('app > redux > utils > addTodo', () => {
  const todosBefore = [
    {
      id: 0,
      text: 'buy milk',
    },

    {
      id: 2,
      text: 'do laundry',
    },
  ]

  const todosAfter = [
    {
      id: 0,
      text: 'buy milk',
    },
    {
      id: 2,
      text: 'do laundry',
    },
    {
      id: 3,
      text: 'go to post office',
    },
  ]

  const text = 'go to post office'

  it('adds item into todo array, with id one larger than the previous entry', () => {
    expect(addTodo(text, todosBefore)).toEqual(todosAfter)
  })

  it('if todos are empty, it starts new array', () => {
    const newAfter = [{
      id: 0,
      text,
    }]
    expect(addTodo(text, [])).toEqual(newAfter)
  })
})
