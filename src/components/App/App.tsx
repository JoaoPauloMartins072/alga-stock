import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import ProductView from '../../views/ProductView';
import NotFoundView from './../../views/NotFoundView';
import LoginView from '../../views/LoginView';
import ProfileView from './../../views/ProfileView';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/products" />
          </Route>
          <Route path="/products/:id?" exact component={ProductView} />
          <Route path="/login" exact component={LoginView} />
          <Route path="/profile" exact component={ProfileView} />
          <Route component={NotFoundView}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
