// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import Pages from './pages/Pages';
import GlobalStyle from './components/GlobalStyle'
import axios from 'axios'

import { Route, Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom'
import Signup from './pages/Signup'
import Home from './pages/Home';
import Login from './pages/Login';

function App(props) {

  const [user, setUser] = useState(props.user);
  console.log(user)

  return (

    <Switch>
    <Route exact path="/" 
    render={ (props) => <Home setUser={setUser} user={user} {...props} /> } />
    <Route exact path="/signup"  
    render={ (props) => <Signup setUser={setUser} user={user} {...props}/> }
    />
    <Route exact path="/login" 
    render={ (props) => <Login setUser={setUser} user={user} {...props}/> } />
    </Switch>
  );
}

export default App;
