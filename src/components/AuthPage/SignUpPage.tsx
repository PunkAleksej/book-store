import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useAppDispatch } from '../../store';
import { userActions } from '../../store/user/reduser';
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
import { signUp } from '../../api/authentication';
import signUpSchema from '../schemas/SignUpSchema';

const SignUp:React.FC = () => {
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

  let repeatPasswordLabelText = 'Repeat your password';
  if (formik.errors.RepeatPassword) {
    repeatPasswordLabelText = formik.errors.RepeatPassword;
  }
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
          />

          <Link to="/login" className='auth-menu_text'>Sign in</Link>
          <button className="auth-menu_button">Registration</button>
        </AuthMenu>
        <AuthImg />
      </AuthContainer>
      <Footer />
    </HeightContainer>
  );
}

export default SignUp;


// import { useNavigate } from "react-router-dom";

// function SignupForm() {
//   let navigate = useNavigate();

//   async function handleSubmit(event) {
//     event.preventDefault();
//     await submitForm(event.target);
//     navigate("../success", { replace: true });
//   }

//   return <form onSubmit={handleSubmit}>{/* ... */}</form>;
// }