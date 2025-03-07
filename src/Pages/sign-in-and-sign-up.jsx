import React from 'react';

import SignIn from '../Components/sign-in';
import SignUp from '../Components/sign-up';

import '../Styles/sign-in-and-sign-up.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;