import './App.css';
import React from 'react';

function App() {
  var [todos,setTodos]=React.useState(["get bmw","pay rent","pay school fee","go to office"])
  var [newtodo,setNewtodo]=React.useState("")
  function addTodo(){
    var temp=[...todos]
    temp.push(newtodo)
    setTodos(temp)
  }
  return (
    <div className="App">
      <div className="myApp">
        <input type="text" onKeyUp={(e)=>{setNewtodo(e.target.value)}}/>
        <button onClick={addTodo}>AddTask</button>
        <ul>
          {
            todos.map((todo)=>{
              return <li>{todo}</li>
            })
          }
        </ul>

      </div>
 
    </div>
  );
}

export default App;
