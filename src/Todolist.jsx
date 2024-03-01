import {connect} from 'react-redux';

function Todolist(props){
    console.log(props)
    return (
        <div>
            <input type="text" onKeyUp={(e)=>{props.dispatch({type:"NEWTODO",payload:e.target.value})}}/>
            <button onClick={()=>{props.dispatch({type:"ADDTODO"})}}>Add Task</button>
            <ul>
                {
                    props.todos.map((todo,i)=>{
                        return (
                            <div>
                                <li>{todo}<button onClick={()=>{props.dispatch({type:'DEL',ind:i})}}>Delete</button></li>
                            </div>
                        )
                    })
                }
            </ul>
            
        </div>

    )
}
export default connect(function(store){return store})(Todolist);