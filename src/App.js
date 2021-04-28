//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Task1 from './tasks/task1';
import Home from './Home';
import Task2 from './tasks/Task2';
import ChildOfTask2 from './tasks/ChildOfTask2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Switch>
        <Route path='/task1' component={Task1} />
        <Route path='/task2' component={Task2} />
        <Route path='/child' component={ChildOfTask2} />
        <Route path='/' component={Home}></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
