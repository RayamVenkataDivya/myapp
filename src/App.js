import './App.css';
import React from 'react';
import Todolist from './Todolist';

function App() {
  var [todos,setTodos]=React.useState([
    {
      tname:"get bmw",
      status:true
    },
    {
      tname:"pay rent",
      status:false
    },
    {
      tname:"do homework",
      status:true
    },
    {
      tname:"goto office",
      status:false
    },
    {
      tname:"get dress",
      status:false
    }
    ])
    var [newtodo,setNewtodo]=React.useState("")

    function addTodo(e){
      var newObj={
        tname:newtodo,
        status:true
      }
      setTodos([...todos,newObj])
    }

    function doneTodo(i){
      var temp=[...todos];
      // console.log(temp)
      temp[i].status=!temp[i].status;
      setTodos([...todos])
      // console.log(todos)
    }

  return (
    <div className="App">
      <h1>Todolist</h1>
      <div className="input">
        <input type="text" placeholder="Enter new todo" onKeyUp={(e)=>{setNewtodo(e.target.value)}}/>
        <button onClick={addTodo}>Add Task</button>
      </div>
      {
        todos.map((todo,i)=>{
          // console.log(todos)
          return <Todolist  doneTodo={doneTodo} i={i} todo={todo}></Todolist>
        })
      }
 
    </div>
  );
}

export default App;
