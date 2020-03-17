import React,{useState,useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";

import { useHistory } from "react-router-dom";



function App() {
  const history = useHistory();
  const [token,settoken]=useState(null)
  const signout=()=>{
    localStorage.clear()
    history.push("/sign-in")
  }

  useEffect(()=>{
    const token_local=localStorage.getItem('token');
    settoken(token_local)
    console.log("Token set")
  },[token])
  
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Selfie App</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign In</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign Up</Link>
              </li>
              <li className="nav-item">
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" render={()=><Login token={settoken}/>} />
            <Route path="/sign-up" component={SignUp} />
       
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  
  );
}

export default App;
