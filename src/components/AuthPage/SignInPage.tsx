import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useAppDispatch } from '../../store';
import { userActions } from '../../store/user/reduser';
import {
  AuthContainer,
  AuthMenu,
  AuthImg,
  HeightContainer,
} from './Sign.Styles';

import Mail from '../../assets/images/Mail.svg';
import Hide from '../../assets/images/Hide.svg';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Input from '../profilePage/elements/Input';
import { signIn } from '../../api/authentication';
import signInSchema from '../schemas/SignInPageShema';
import toastsWriter from '../utils/Toasts';

const SignIn:React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
          email: values.Email,
        });

        localStorage.setItem('token', response.data.token);
        const user = response.data.user;
        dispatch(userActions.addUser(user));
        navigate('/');
      } catch (error: any) {
        const errorText = error.response.data
          ? error.response.data.payload[0].message
          : error.message;
        toastsWriter({ text: errorText, style: 'error' });
      }
    },
  });

  const emailLabelText = formik.errors.Email ? formik.errors.Email : 'Enter your email';
  const passwordLabelText = formik.errors.Password ? formik.errors.Password : 'Enter your password';

  return (
    <HeightContainer>

      <Header />

      <AuthContainer>
        <AuthMenu onSubmit={formik.handleSubmit}>
          <h1 className="auth-menu_title">Log In</h1>
          <Input
          icon={Mail}
          name="Email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.Email}
          err={formik.errors.Email && formik.touched.Email ? formik.errors.Email : undefined}
          onBlur={formik.handleBlur}
          inputText={emailLabelText}
          authInput
          />

          <Input
          icon={Hide}
          name="Password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.Password}
          err={formik.errors.Password && formik.touched.Password
            ? formik.errors.Password : undefined}
          onBlur={formik.handleBlur}
          inputText={passwordLabelText}
          authInput
          />

          <Link to="/sign-up" className="auth-menu_text">Registration</Link>
          <button className="auth-menu_button" type="submit">Log In</button>

        </AuthMenu>
        <AuthImg />
      </AuthContainer>

      <Footer />

    </HeightContainer>
  );
};

export default SignIn;
