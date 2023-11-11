type TodoListProps = {
  liste: TodoType[]
  toggleTodo: (id: string, completed: boolean) => void
  deleteTodo: (id: string) => void
}

function TodoList({ liste, toggleTodo, deleteTodo }: TodoListProps) {
  return (
    <ul>
      {liste.map((item) => (
        <li key={item.id}>
          <input
            type="checkBox"
            checked={item.completed}
            onChange={(e) => toggleTodo(item.id, e.target.checked)}
          />
          {item.title}
          <button onClick={() => deleteTodo(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
