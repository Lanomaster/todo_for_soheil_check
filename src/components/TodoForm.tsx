import { SyntheticEvent } from 'react'

type TodoFormProps = {
  addTodo: (title: string) => void
  setNewTodo: (title: string) => void
  todo: string
}

function TodoForm({ addTodo, setNewTodo, todo }: TodoFormProps) {
  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()

    addTodo(todo)

    setNewTodo('')
  }

  return (
    <form
      action=""
      onSubmit={handleSubmit}
    >
      <label htmlFor="hi"></label>
      <input
        type="text"
        id="hi"
        placeholder="Füge ein"
        value={todo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button>Add</button>
    </form>
  )
}

export default TodoForm
