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
import manImg from '../../assets/images/man.png';
import Mail from '../../assets/images/Mail.svg';
import Hide from '../../assets/images/Hide.svg';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Input from '../profilePage/elements/Input';
import { signUp } from '../../api/authentication';
import signUpSchema from '../schemas/SignUpSchema';
import toastsWriter from '../utils/Toasts';
import ButtonComponent from '../Elements/Button';

type ErrorPayloadType = {
  message: string;
  field: string;
  path: string;
  errorType: string;
};

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      password: '',
      repeatPassword: '',
      email: '',
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      try {
        const response = await signUp({
          password: values.repeatPassword,
          email: values.email,
        });
        localStorage.setItem('token', response.data.token);
        const user = response.data.user;
        dispatch(userActions.addUser(user));
        navigate('/profile');
        toastsWriter({ text: 'Registration success', style: 'success' });
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response) {
            error.response.data.payload.map((payload: ErrorPayloadType) => (
              toastsWriter({ text: payload.message, style: 'error' })
            ));
          }
          toastsWriter({ text: error.message, style: 'error' });
        }
      }
    },
  });

  const emailLabelText = formik.errors.email ? formik.errors.email : 'Enter your email';
  const passwordLabelText = formik.errors.password ? formik.errors.password : 'Enter your password';
  const repeatPasswordLabelText = formik.errors.repeatPassword ? formik.errors.repeatPassword : 'Repeat your password';

  return (
    <HeightContainer>
      <Header />
      <AuthContainer>
        <AuthMenu onSubmit={formik.handleSubmit}>
          <h1 className="auth-menu_title">Sign Up</h1>

          <Input
            icon={Mail}
            type="email"
            placeholder="Email"
            err={formik.errors.email}
            inputText={emailLabelText}
            authInput
            {...formik.getFieldProps('email')}
          />

          <Input
            icon={Hide}
            type="password"
            placeholder="Password"
            err={formik.errors.password}
            inputText={passwordLabelText}
            authInput
            {...formik.getFieldProps('password')}
          />

          <Input
            icon={Hide}
            type="password"
            placeholder="Repeat Password"
            err={formik.errors.repeatPassword}
            inputText={repeatPasswordLabelText}
            authInput
            {...formik.getFieldProps('repeatPassword')}
          />

          <Link to="/login" className="auth-menu_text">Sign in</Link>
          <ButtonComponent
            text="Registration"
            type="submit"
          />
        </AuthMenu>
        <AuthImg>
          <img className="auth_img" src={manImg} />
        </AuthImg>
      </AuthContainer>
      <Footer />
    </HeightContainer>
  );
};

export default SignUp;
