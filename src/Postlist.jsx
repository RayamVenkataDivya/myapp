function Postlist({post,i,likebtn,dislikebtn}){
    return(
        <div className="App2">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className="d-flex flex-wrap justify-content-between">
                <button class="btn btn-success" onClick={()=>likebtn(i)}>Likes:{post.likes}</button>
                <button class="btn btn-danger" onClick={()=>dislikebtn(i)}>Dislikes:{post.dislikes}</button>
            </div>
        </div>
    )
}
export default Postlist;