import './App.css';
import React from 'react';

function App() {
  var [courseDetails,setCourseDetails]=React.useState([
    {
    cname:"React",
    ctrainer:"Praveen Gubbala",
    ccost:25000
    },
    {
      cname:"Angular",
      ctrainer:"Dritiman",
      ccost:30000
    },
    {
      cname:"Java",
      ctrainer:"Ramesh",
      ccost:35000
    },
    {
      cname:"React",
      ctrainer:"Praveen Gubbala",
      ccost:25000
    }
  ])
  return (
    <div  style={{border:'1px solid',padding:'10px',margin:'10px'}}>
      {
        courseDetails.map((course,i)=>{
          return (
            <div  style={{border:'1px solid',padding:'2px',margin:'3px'}}>
              <h3>CourseName:{course.cname}</h3>
              <h3>CourseTrainer:{course.ctrainer}</h3>
              <h3>CourseCost:{course.ccost}</h3>
            </div>
          )
        })
      }
    </div>
   
  )
}

export default App;
