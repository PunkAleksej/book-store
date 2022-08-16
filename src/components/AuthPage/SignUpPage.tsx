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
import { signUp } from '../../api/authentication';
import signUpSchema from '../schemas/SignUpSchema';
import toastsWriter from '../utils/Toasts';
import ButtonComponent from '../Elements/Button';

const SignUp:React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      Password: '',
      RepeatPassword: '',
      Email: '',
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      try {
        const response = await signUp({
          password: values.RepeatPassword,
          email: values.Email,
        });
        localStorage.setItem('token', response.data.token);
        const user = response.data.user;
        dispatch(userActions.addUser(user));
        navigate('/profile');
        toastsWriter({ text: 'Registration success', style: 'success' });
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
  const repeatPasswordLabelText = formik.errors.RepeatPassword ? formik.errors.RepeatPassword : 'Repeat your password';

  return (
    <HeightContainer>
      <Header />
      <AuthContainer>
        <AuthMenu onSubmit={formik.handleSubmit}>
          <h1 className="auth-menu_title">Sign Up</h1>

          <Input
          icon={Mail}
          name="Email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.Email}
          err={formik.errors.Email}
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
          err={formik.errors.Password}
          onBlur={formik.handleBlur}
          inputText={passwordLabelText}
          authInput
          />

          <Input
          icon={Hide}
          name="RepeatPassword"
          type="password"
          placeholder="Repeat Password"
          onChange={formik.handleChange}
          value={formik.values.RepeatPassword}
          err={formik.errors.RepeatPassword}
          onBlur={formik.handleBlur}
          inputText={repeatPasswordLabelText}
          authInput
          />

          <Link to="/login" className="auth-menu_text">Sign in</Link>
          <ButtonComponent
          text="Registration"
          type="submit"
          />
        </AuthMenu>
        <AuthImg />
      </AuthContainer>
      <Footer />
    </HeightContainer>
  );
};

export default SignUp;
