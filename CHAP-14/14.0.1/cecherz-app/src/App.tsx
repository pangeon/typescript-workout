import React from 'react';
import { BrowserRouter, Switch, Route, BrowserRouterProps } from "react-router-dom";
import Home from './pages/Home';
import Add from './pages/Add';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  
  const browserRouterProps: BrowserRouterProps = { basename: '/' };
  return (
    <BrowserRouter {...browserRouterProps}>
      <NavBar />
      <Switch>  
        <Route exact path="/" component={Home} />
        <Route path="/add" component={Add} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
