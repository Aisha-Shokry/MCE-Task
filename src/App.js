import './App.css';
import Profile from './components/userProfile/Profile';
import Home from './components/Home';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Login from './components/forms/LoginForm';
import Main from './try/Main';
function App() {
  return (
    <div className="App">
     <Router>
       <Route exact path='/' component={Main}/>
       <Route exact path='/login' component={Login}/>
       <Route exact path='/UserBoard/Profile' component={Profile}/>
     </Router>
    </div>
  );
}

export default App;
