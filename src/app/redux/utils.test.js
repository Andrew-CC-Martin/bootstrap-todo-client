import { filterTodos, addTodo, updateTodo } from './utils'

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

  const newEntry = {
    id: 3,
    text: 'go to post office',
  }

  it('adds item into todo array', () => {
    expect(addTodo(newEntry, todosBefore)).toEqual(todosAfter)
  })

  it('if todos are empty, it starts new array', () => {
    expect(addTodo(newEntry, [])).toEqual([newEntry])
  })

  it('doesnt mutate state', () => {
    const result = addTodo(newEntry, [])
    expect(result[0]).not.toBe(newEntry)
  })
})

describe('app > redux > utils > updateTodo', () => {
  const todosBefore = [
    {
      id: 0,
      text: 'buy milk',
    },
    {
      id: 2,
      text: 'go to post office',
    },
    {
      id: 3,
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
      text: 'go to dry cleaners',
    },
    {
      id: 3,
      text: 'do laundry',
    },
  ]

  const todosAfterWrongOrder = [
    {
      id: 0,
      text: 'buy milk',
    },
    {
      id: 3,
      text: 'do laundry',
    },
    {
      id: 2,
      text: 'go to dry cleaners',
    },
  ]

  const updatedEntry = {
    id: 2,
    text: 'go to dry cleaners',
  }

  it('updates the entry based on the id', () => {
    expect(updateTodo(updatedEntry, todosBefore)).toEqual(todosAfter)
  })

  it('sorts the array based on id', () => {
    expect(updateTodo(updatedEntry, todosBefore)).not.toEqual(todosAfterWrongOrder)
  })
})
