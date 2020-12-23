import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';



import HomePage from './Pages/homepage.component';
import ShopPage from './Pages/Shop/shop.component.jsx';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up.jsx';
import Header from './Components/header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;

