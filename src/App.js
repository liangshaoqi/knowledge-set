import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '@view/layout'
import Login from '@view/login'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/Layout' component={Layout}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
