function Todolist({todo,doneTodo,i}){
    // console.log(todo)
    return(
        <div class={todo.status?"App1 d-flex flex-wrap":"App2 d-flex flex-wrap"}>
            {todo.tname}
            <button onClick={()=>doneTodo(i)}>Done</button>
            <button>Undo</button>
        </div>
    )
}
export default Todolist;  