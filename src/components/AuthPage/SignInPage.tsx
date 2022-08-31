import React from 'react';
import { AxiosError } from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useAppDispatch } from '../../store';
import { userActions } from '../../store/user/reduser';
import {
  AuthContainer,
  AuthMenu,
  AuthImg,
  HeightContainer,
} from './Sign.styles';

import Mail from '../../assets/images/Mail.svg';
import Hide from '../../assets/images/Hide.svg';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Input from '../profilePage/elements/Input';
import { signIn } from '../../api/authentication';
import signInSchema from '../schemas/SignInPageShema';
import toastsWriter from '../utils/Toasts';
import ButtonComponent from '../Elements/Button';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: signInSchema,
    onSubmit: async (values) => {
      try {
        const response = await signIn({
          password: values.password,
          email: values.email,
        });

        localStorage.setItem('token', response.data.token);
        const user = response.data.user;
        dispatch(userActions.addUser(user));
        navigate('/');
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorText = error.response?.data
            ? error.response.data.payload[0].message
            : error.message;
          toastsWriter({ text: errorText, style: 'error' });
        }
      }
    },
  });

  const emailLabelText = formik.errors.email ? formik.errors.email : 'Enter your email';
  const passwordLabelText = formik.errors.password ? formik.errors.password : 'Enter your password';
  const emailError = formik.errors.email && formik.touched.email ? formik.errors.email : undefined;
  const passwordError = formik.errors.password && formik.touched.password
    ? formik.errors.password
    : undefined;
  console.log(formik.errors);

  return (
    <HeightContainer>

      <Header />

      <AuthContainer>
        <AuthMenu onSubmit={formik.handleSubmit}>
          <h1 className="auth-menu_title">Log In</h1>
          <Input
            icon={Mail}
            type="email"
            placeholder="Email"
            err={emailError}
            inputText={emailLabelText}
            authInput
            {...formik.getFieldProps('email')}
          />

          <Input
            icon={Hide}
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            err={passwordError}
            onBlur={formik.handleBlur}
            inputText={passwordLabelText}
            authInput
          />

          <Link to="/sign-up" className="auth-menu_text">Registration</Link>
          <ButtonComponent
            text="Log In"
            type="submit"
          />

        </AuthMenu>
        <AuthImg />
      </AuthContainer>

      <Footer />

    </HeightContainer>
  );
};

export default SignIn;
