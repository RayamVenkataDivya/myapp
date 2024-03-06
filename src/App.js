import './App.css';
import React from 'react';

function App() {
  var [like,setLike]=React.useState(0)
  var [dislike,setDislike]=React.useState(0)
  function likeBtn(){
    setLike(like+1)
  }
  function dislikeBtn(){
    setDislike(dislike+1)
  }

  return (
    <div style={{border:"1px solid black",boxShadow:"1px 10px 20px 2px",padding:'3px',width:"30%",marginLeft:"35%"}}>
      <h1 style={{display:"flex",justifyContent:"center"}}>Please click on the Button</h1>
      <div style={{display:"flex",justifyContent:"center"}}>
        <h1>{like}<i class="bi bi-hand-thumbs-up-fill" onClick={likeBtn}></i></h1>&nbsp;&nbsp;&nbsp;
        <h1>{dislike}<i class="bi bi-hand-thumbs-down-fill" onClick={dislikeBtn}></i></h1>
      </div>
    </div>
  );
}

export default App;
