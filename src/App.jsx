import Counter from "./Counter"
import Todolist from "./Todolist"

function App() {
  return (
    <>
      <div className="border border-3 p-3 m-2 border-success">
        <h1>Redux Store</h1>
        <Counter></Counter>
        <Todolist></Todolist>
      </div>
      
    </>
  )
}

export default App
