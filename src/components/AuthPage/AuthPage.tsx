import React from 'react';
import {
  AuthContainer,
  AuthMenu,
  AuthMenuTitle,
  AuthMenuText,
  AuthMenuInput,
  AuthMenuButton,
  AuthImg,
} from './AuthModule';


import { Link } from "react-router-dom";
import Footer from '../Footer/Footer';

function Login() {
  return (
    <div>
      <AuthContainer>
        <AuthMenu>
          <AuthMenuTitle>Log In</AuthMenuTitle>
          <AuthMenuInput type="text" placeholder='Email'/>
          <AuthMenuText>Enter your email</AuthMenuText>
          <AuthMenuInput type="text" placeholder='Password'/>
          <AuthMenuText>Enter your password</AuthMenuText>
          <AuthMenuButton>Log In</AuthMenuButton>
          <Link to="/">Main Page</Link>
          <Link to="/profile">Profile Page</Link>
        </AuthMenu>
        <AuthImg></AuthImg>
      </AuthContainer>
      <Footer></Footer>
    </div>
  );
}

export default Login;
