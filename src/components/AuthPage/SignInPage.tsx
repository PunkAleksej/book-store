import React from 'react';
import {
  AuthContainer,
  AuthMenu,
  AuthImg,
  HeightContainer
} from './SignStyle';


import { Link } from "react-router-dom";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Input from './elements/Input';

function SignIn() {
  return (
    <HeightContainer>

      <Header></Header>

      <AuthContainer>
        <AuthMenu>
          <h1 className="auth-menu_title">Log In</ h1>

          <Input></Input>
          
          <p className="auth-menu_text">Enter your email</p>

          <Input></Input>
          <p className="auth-menu_text">Enter your password</p>

          <Link to="/sign-up">reg now</Link>
          <button className='auth-menu_button'>Log In</button>

        </AuthMenu>
        <AuthImg></AuthImg>
      </AuthContainer>

      <Footer></Footer>

    </HeightContainer>
  );
}

export default SignIn;
