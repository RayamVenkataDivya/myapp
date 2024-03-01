const initialState={
    inputValue:"",
    todos:[]
}

function TodolistReducer(state=initialState,action){
    if(action.type==="NEWTODO"){
        return {...state,inputValue:action.payload}
    }
    if(action.type==="ADDTODO"){
        return {...state,todos:[...state.todos,state.inputValue]}
    }
    if(action.type==="DEL"){
        var temp=[...state.todos]
        temp.splice(action.ind,1)
        return {...state,todos:[...temp]}

    }
    return state

}
export default TodolistReducer;