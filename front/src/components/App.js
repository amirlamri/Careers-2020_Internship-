import React,{} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch,Route, Redirect} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Register from './Register';
function App() {

  



  return (
    <div>
      <BrowserRouter>
        <Switch>
        <Route exact path="/Login"  component={Login} />
        <Route exact path="/Register"  component={Register} />
        <Route exact path="/"  component={Home} />
       {localStorage.getItem('cool-jwt')?<Route exact path="/Dashboard"  component={Dashboard} />: <Redirect to={"/Login"}/>}
       {localStorage.getItem('cool-jwt')?<Redirect to={"/Dashboard"}/>:<Redirect to={"/Login"}/>}

    
       
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
