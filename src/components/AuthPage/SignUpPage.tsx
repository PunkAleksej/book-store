import React from 'react';
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

function SignUp() {
  const signInSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: signInSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <HeightContainer>
      <Header />
      <AuthContainer>
        <AuthMenu onSubmit={formik.handleSubmit}>
          <h1 className="auth-menu_title">Sign Up</h1>

          <Input
            icon={Mail}
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            />

          <p className="auth-menu_text">Enter your email</p>

          <Input
            icon={Hide}
            name="password"
            placeholder="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            />

          <p className="auth-menu_text">Enter your password</p>

          <Input
            icon={Hide}
            name="password"
            placeholder="Password replay"
            onChange={formik.handleChange}
            value={formik.values.password}
            />

          <p className="auth-menu_text">Repeat your password without errors</p>
          <Link to="/login">sign in</Link>
          <button className="auth-menu_button">Log In</button>
          <Link to="/">Main Page</Link>
          <Link to="/profile">Profile Page</Link>
        </AuthMenu>
        <AuthImg />
      </AuthContainer>
      <Footer />
    </HeightContainer>
  );
}

export default SignUp;
