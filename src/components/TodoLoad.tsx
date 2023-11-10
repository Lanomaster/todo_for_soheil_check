import useTodoStore from "../store/todoStore"

type TodoLoad = {
  id: number,
  text: string,
  done: boolean,
}

// type TodoLoadProps = {
//   load:(todos: TodoType[]) => void
// }

function TodoLoad() {
  //const useStore = useTodoStore(state => state.load)
  const store = useTodoStore()

  function loadData() {
    fetch("https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json")
      .then(response => response.json())
      .then((data: TodoLoad[] ) => {
        const transform = data.map(item => ({
            id: item.id.toString(),
            title: item.text,
            completed: item.done,
        }))
        store.load(transform)
      })
  }

  return(
    <button onClick={() =>loadData()}>Load</button>
  )
}

export default TodoLoad;