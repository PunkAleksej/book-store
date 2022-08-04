import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  AuthContainer,
  AuthMenu,
  AuthImg,
  HeightContainer,
} from './SignStyle';

import customAxios from '../../api';
import Mail from '../../assets/images/Mail.svg';
import Hide from '../../assets/images/Hide.svg';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Input from './elements/Input';
import { signIn } from '../../api/authentication';
import { store } from '../../store';
import { createSlice } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../store';
import { userActions } from '../../store/user/reduser';
import { useStore } from 'react-redux';

const signInSchema = Yup.object().shape({
  Password: Yup.string()
    .min(8, 'Password too short')
    .max(20, 'password too long')
    .required('Password required'),
  Email: Yup.string().email('Email is not correct').required('Email required'),
});

const SignIn:React.FC = () => {
  const dispatch = useAppDispatch()
  const [state, setState] = useState('');
  const formik = useFormik({
    initialValues: {
      Password: '',
      Email: '',
    },
    validationSchema: signInSchema,
    onSubmit: async (values) => {
      try {
        const response = await signIn({
          password: values.Password,
          email: values.Email
        });

        localStorage.setItem('token', response.data.token);
        const newUser = {
          firstName : response.data.user.firstName,
          lastName : response.data.user.lastName,
          email : response.data.user.email,
          id : response.data.user.id,
          photo: response.data.user.photo
        }
        const user = response.data.user;
        dispatch(userActions.addUser(newUser));
      } catch (error) {
        alert(error);
      }
    },
  });

  let emailLabelText = 'Enter your email';
  if (formik.errors.Email) {
    emailLabelText = formik.errors.Email;
  }

  let passwordLabelText = 'Enter your password';
  if (formik.errors.Password) {
    passwordLabelText = formik.errors.Password;
  }

  return (
    <HeightContainer>

      <Header />

      <AuthContainer>
        <AuthMenu onSubmit={formik.handleSubmit}>
          <h1 className="auth-menu_title">Log In {state}</h1>
          <Input
          icon={Mail}
          name="Email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.Email}
          err={formik.errors.Email && formik.touched.Email ? formik.errors.Email : undefined}
          touch={formik.touched.Email}
          onBlur={formik.handleBlur}
          inputText={emailLabelText}
          />

          <Input
          icon={Hide}
          name="Password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.Password}
          err={formik.errors.Password && formik.touched.Password ?
            formik.errors.Password : undefined}
          touch={formik.touched.Password}
          onBlur={formik.handleBlur}
          inputText={passwordLabelText}
          />

          <Link to="/sign-up" className='auth-menu_text'>Registration</Link>
          <button className="auth-menu_button" type="submit">Log In</button>

        </AuthMenu>
        <AuthImg />
      </AuthContainer>

      <Footer />

    </HeightContainer>
  );
};

export default SignIn;
