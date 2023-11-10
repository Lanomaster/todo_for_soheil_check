import { create } from "zustand"
import {persist} from "zustand/middleware"

type TodoState = {
  eintrag: string
  liste: TodoType[]
  setEintrag: (title: string) => void
  addTodo: (title: string) => void
  toggleTodo: (id: string, completed: boolean) => void
  deleteTodo: (id: string) => void
  load: (todos: TodoType[]) => void
}

function toggleTodoHelper(todos: TodoType[], id: string, completed: boolean): TodoType[] {
  return todos.map(item => 
    {if(item.id===id) {
      return {...item, completed} 
    } else {
        return item
    }}
  )
}

function deleteTodoHelper(todos: TodoType[], id: string): TodoType[] {
  return todos.filter(item => item.id!==id)
}

const useTodoStore = create<TodoState>()(
  persist(
      (set): TodoState => ({
      eintrag: "",
      liste: [],
      setEintrag: (title: string) => 
        set((state) => ({
          ...state,
          eintrag: title
        })),
      addTodo: (title: string) => 
        set((state) => ({
          ...state,
          liste: [...state.liste, {id: crypto.randomUUID(), title: title, completed: false}],
        })),
      toggleTodo: (id: string, completed: boolean) => 
        set((state) => ({
          ...state,
          liste: toggleTodoHelper(state.liste, id, completed)
        })),
      deleteTodo: (id: string) => 
        set((state) => ({
          ...state,
          liste: deleteTodoHelper(state.liste, id)
        })),
      load: (todos: TodoType[]) => 
        set((state) => ({
          ...state,
          liste: [...state.liste, ...todos]
        }))
    })
    ,{name:"todos"})
)

export default useTodoStore;