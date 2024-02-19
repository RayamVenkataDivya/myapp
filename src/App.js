import './App.css';
import React from "react";

function App() {
  var [taskslist1,setTaskslist1]=React.useState(["Task1","Task2","Task3"])
  var [taskslist2,setTaskslist2]=React.useState(["Task4","Task5","Task6"])


  function deleteTasks1(i){

    taskslist2.push(taskslist1[i])
    taskslist1.splice(i,1)
    setTaskslist1([...taskslist1])
    setTaskslist2([...taskslist2])

  }

  function deleteTasks2(i){

    taskslist1.push(taskslist2[i])
    taskslist2.splice(i,1)
    setTaskslist1([...taskslist1])
    setTaskslist2([...taskslist2])

  }

  return (
    <div className="d-flex flex-wrap">

        <div className="App">
          {
            taskslist1.map((t1,i)=>{
              return (
                <div className="App2" onClick={()=>deleteTasks1(i)} >{t1}</div>
              )
            })
          }
        </div>

        <div className="App">
          {
            taskslist2.map((t2,i)=>{
              return (
                <div className="App2" onClick={()=>{deleteTasks2(i)}}>{t2}</div>
              )
            })
          }
        </div>
        
    </div>
  );
}

export default App;
