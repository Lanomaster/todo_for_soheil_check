import useTodoStore from "../store/todoStore";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoLoad from "./TodoLoad";

function Todo() {
  const todo = useTodoStore(state => state.eintrag)
  const setNewTodo = useTodoStore(state => state.setEintrag)
  const liste = useTodoStore(state => state.liste)
  const addTodo = useTodoStore(state => state.addTodo)
  const toggleTodo = useTodoStore(state => state.toggleTodo)
  const deleteTodo = useTodoStore(state => state.deleteTodo)
  const load = useTodoStore(state => state.load)

  return(
    <>
    <TodoLoad  />
    <TodoForm addTodo={addTodo}
     todo={todo}
     setNewTodo={setNewTodo} />
    <TodoList liste={liste} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}

export default Todo;