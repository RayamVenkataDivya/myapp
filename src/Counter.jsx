import {connect} from 'react-redux';
function Counter(props){
    console.log(props)
    return(
        <div>
            <h2>count:{props.count}</h2>
            <button onClick={()=>{props.dispatch({type:"INC"})}}>Increment</button>&nbsp;
            <button onClick={()=>{props.dispatch({type:"DEC"})}}>Decrement</button>&nbsp;
            <button onClick={()=>{props.dispatch({type:"RESET"})}}>RESET</button>

        </div>

    )
}
export default connect((store)=>{return store})(Counter);