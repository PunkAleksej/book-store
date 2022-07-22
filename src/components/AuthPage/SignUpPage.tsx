import React from 'react';
import {
  AuthContainer,
  AuthMenu,
  AuthMenuTitle,
  AuthMenuText,
  AuthMenuInput,
  AuthMenuButton,
  AuthImg,
  InputIconStyle
} from './SignInModule';


import { Link } from "react-router-dom";
import Footer from '../Footer/Footer';

function SignUp() {
  return (
    <div>
      <AuthContainer>
        <AuthMenu>
          <AuthMenuTitle>Log In</AuthMenuTitle>
          <div>
            <InputIconStyle></InputIconStyle>
            <AuthMenuInput type="text" placeholder='Email'/>
          </div>
          
          <AuthMenuText>Enter your email</AuthMenuText>
          <div>
            <InputIconStyle></InputIconStyle>
            <AuthMenuInput type="text" placeholder='Password'/>
          </div>
          <AuthMenuText>Enter your password</AuthMenuText>
          <div>
            <InputIconStyle></InputIconStyle>
            <AuthMenuInput type="text" placeholder='Password replay'/>
          </div>
          <AuthMenuText>Repeat your password without errors</AuthMenuText>
          <Link to="/login">sign in</Link>   
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

export default SignUp;