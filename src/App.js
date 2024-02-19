import './App.css';
import React from 'react';
import Postlist from './Postlist';

function App() {
  var [posts,setPosts]=React.useState([
    {
      title: 'Morning vibes',
      content:"Surprise been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan",
      likes:160,
      dislikes:5,
    },
    {
      title: 'React basic',
      content:"readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like re",
      likes:363,
      dislikes:12,
    },
    {
      title: 'Where can I get some?',
      content:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need t essentially unchan",
      likes: 200,
      dislikes:10,
    }
  ])

  var [newtitle,setNewtitle]=React.useState()
  var [newcontent,setNewcontent]=React.useState()

 function addPost(){
  var newObj={
    title:newtitle,
    content:newcontent,
    likes:0,
    dislikes:0
  }
  setPosts([...posts,newObj])
 }

 function likebtn(i){
  posts[i].likes++;
  setPosts([...posts])
 }

 function dislikebtn(i){
  posts[i].dislikes++;
  setPosts([...posts])
 }

  return (
    <div className="App">
      <h1>My Social App</h1>
      Title:<br/>
      <input type="text" placeholder="Enter title" onKeyUp={(e)=>setNewtitle(e.target.value)}/><br/>
      Content:<br/>
      <input type="text" onKeyUp={(e)=>setNewcontent(e.target.value)}/><br/>
      <button class="btn btn-secondary" onClick={addPost}>Add Post</button>
      {
        posts.map((post,i)=>{
          return(
            <Postlist post={post} i={i} likebtn={likebtn} dislikebtn={dislikebtn}></Postlist>
          )
        })
      }
    </div>
  );
}

export default App;
