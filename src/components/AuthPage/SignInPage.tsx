import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  AuthContainer,
  AuthMenu,
  AuthImg,
  HeightContainer,
} from './SignStyle';

import Mail from '../../assets/images/Mail.svg';
import Hide from '../../assets/images/Hide.svg';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Input from './elements/Input';

const signInSchema = Yup.object().shape({
  Password: Yup.string()
    .min(8, 'Password too short')
    .max(20, 'password too long')
    .required('Password required'),
  Email: Yup.string().email('Email is not correct').required('Email required'),
});

const SignIn:React.FC = () => {
  const [state, setState] = useState('');
  const formik = useFormik({
    initialValues: {
      Password: '',
      Email: '',
    },
    validationSchema: signInSchema,
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1', {
          method: 'GET',
        });
        const data = await response.json();
        setState(data.name)
      } catch(e) {
        console.log('ERR')
      }
    },
  });

  let emailLabelText;
  if (formik.errors.Email) {
    emailLabelText = formik.errors.Email;
  } else {
    emailLabelText = 'Enter your email';
  }

  let passwordLabelText;
  if (formik.errors.Password) {
    passwordLabelText = formik.errors.Password;
  } else {
    passwordLabelText = 'Enter your password';
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
          />

          <p className="auth-menu_text">{emailLabelText}</p>
          <Input
            icon={Hide}
            name="Password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.Password}
            err={formik.errors.Password}
            touch={formik.touched.Password}
            onBlur={formik.handleBlur}
            />
          <p className="auth-menu_text">{passwordLabelText}</p>

          <Link to="/sign-up">reg now</Link>
          <button className="auth-menu_button" type="submit">Log In</button>

        </AuthMenu>
        <AuthImg />
      </AuthContainer>

      <Footer />

    </HeightContainer>
  );
};

export default SignIn;
