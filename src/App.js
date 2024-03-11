import './App.css';
import React from 'react';

function App() {
  var [students,setStudents]=React.useState([
    {
      firstname:"DivyaChowdary",
      lastname:"Rayam",
      age:22,
      salary:50000,
      gender:"female"
    },
    {
      firstname:"Dhanu",
      lastname:"Aitha",
      age:25,
      salary:60000,
      gender:"male"
    },
    {
      firstname:"Suman",
      lastname:"Nagineni",
      age:27,
      salary:70000,
      gender:"male"
    },
    {
      firstname:"Sirisha",
      lastname:"Annavarapu",
      age:23,
      salary:30000,
      gender:"female"
    },
    {
      firstname:"Shiva",
      lastname:"Boyapati",
      age:29,
      salary:40000,
      gender:"male"
    }
  ])
  function sortByFname(){
    var temp=[...students]
    temp.sort((a,b)=>{
      if(a.firstname<b.firstname){
        return -1;
      }
      if(a.firstname>b.firstname){
        return 1;
      }
      return 0;
    })
    setStudents(temp)
  }
  function sortByLname(){
    var temp=[...students]
    temp.sort((a,b)=>{
      if(a.lastname<b.lastname){
        return -1;
      }
      if(a.lastname>b.lastname){
        return 1;
      }
      return 0;
    })
    setStudents(temp)

  }
  return (
    <div className="App">
      <h1>React Students Table</h1>
      <table border="2">
        <thead>
          <tr>
            <th onClick={sortByFname}>Firstname</th>
            <th onClick={sortByLname}>Lastname</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((student)=>{
              return (
                <tr>
                  <td>{student.firstname}</td>
                  <td>{student.lastname}</td>
                  <td>{student.age}</td>
                  <td>{student.salary}</td>
                  <td>{student.gender}</td>
                </tr>
              )
            })
          }
        </tbody>

      </table>
 
    </div>
  );
}

export default App;
