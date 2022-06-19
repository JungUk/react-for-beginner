import { useState } from "react";


function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    }
    setTodos(currentArray => [toDo, ...currentArray] );
    setTodo("");
  }
  return ( 

    <div>
      <form onSubmit={onSubmit}>
      <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."></input>
      <button>Add to do</button>
      </form>
    </div>
  );
}

export default App;
