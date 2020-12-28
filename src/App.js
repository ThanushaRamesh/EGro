import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'

import './App.css';

import { auth, createUserProfileDocument } from './Firebase/firebase.utils';

import HomePage from './Pages/homepage.component';
import ShopPage from './Pages/Shop/shop.component.jsx';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up.jsx';
import Header from './Components/header';

import { setCurrentUser } from './redux/user/user-action';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App)