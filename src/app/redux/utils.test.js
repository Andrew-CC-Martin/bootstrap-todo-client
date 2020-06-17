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
      isDone: false,
    },
    {
      id: 2,
      text: 'do laundry',
      isDone: false,
    },
  ]

  const newEntry = {
    id: 3,
    text: 'go to post office',
    isDone: false,
  }

  it('adds item into todo array', () => {
    const todosAfter = [
      {
        id: 0,
        text: 'buy milk',
        isDone: false,
      },
      {
        id: 2,
        text: 'do laundry',
        isDone: false,
      },
      {
        id: 3,
        text: 'go to post office',
        isDone: false,
      },
    ]

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
      isDone: false,
    },
    {
      id: 2,
      text: 'go to post office',
      isDone: false,
    },
    {
      id: 3,
      text: 'do laundry',
      isDone: false,
    },
  ]

  const updatedEntry = {
    id: 2,
    text: 'go to dry cleaners',
    isDone: false,
  }

  it('updates the entry based on the id', () => {
    const todosAfter = [
      {
        id: 0,
        text: 'buy milk',
        isDone: false,
      },
      {
        id: 2,
        text: 'go to dry cleaners',
        isDone: false,
      },
      {
        id: 3,
        text: 'do laundry',
        isDone: false,
      },
    ]

    expect(updateTodo(updatedEntry, todosBefore)).toEqual(todosAfter)
  })

  it('sorts the array based on id', () => {
    const todosAfterWrongOrder = [
      {
        id: 0,
        text: 'buy milk',
        isDone: false,
      },
      {
        id: 3,
        text: 'do laundry',
        isDone: false,
      },
      {
        id: 2,
        text: 'go to dry cleaners',
        isDone: false,
      },
    ]

    expect(updateTodo(updatedEntry, todosBefore)).not.toEqual(todosAfterWrongOrder)
  })

  it('updates isDone', () => {
    const todosAfter = [
      {
        id: 0,
        text: 'buy milk',
        isDone: false,
      },
      {
        id: 2,
        text: 'go to post office',
        isDone: true,
      },
      {
        id: 3,
        text: 'do laundry',
        isDone: false,
      },
    ]

    const updatedIsDone = {
      id: 2,
      text: 'go to post office',
      isDone: true,
    }

    expect(updateTodo(updatedIsDone, todosBefore)).toEqual(todosAfter)
  })
})
