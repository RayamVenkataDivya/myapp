import './App.css';
import {Outlet,Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <h1>Welcome to ReactJS Application</h1>
        <Link to="/countries">countries</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/todolist">todolist</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/counter">counter</Link>
        <Outlet></Outlet>
    </div>
  );
}

export default App;
