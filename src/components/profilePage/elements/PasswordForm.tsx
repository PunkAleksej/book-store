import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileContainer, ProfileImg, ProfileMenuInput } from '../ProfilePageStyles';
import Footer from '../../Footer/Footer';
import Input from '../elements/Input';
import { useAppSelector } from "../../../store/index";
import Header from '../../Header/Header';
import Hide from '../../../assets/images/Hide.svg';
import { boolean } from 'yup';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { changePass } from '../../../api/authentication';

type PropsPassType = {
  isPasswordChange: boolean;
}

const changePassShema = Yup.object().shape({
  oldPassword: Yup.string()
    .min(8, 'Password too short')
    .max(20, 'password too long')
    .required('Password required'),
  newPassword: Yup.string()
    .min(8, 'Password too short')
    .max(20, 'password too long')
    .required('Password required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
});

const PasswordForm:React.FC<PropsPassType> = (props) => {
  const { isPasswordChange } = props;
  const userInfo = useAppSelector((store) => store.userState.user)
  let password = 'any text';
  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      repeatPassword: '',
    },
    validationSchema: changePassShema,
    onSubmit: async (values) => {
      try {
        const response = await changePass({
          oldPassword: values.oldPassword,
          newPassword: values.newPassword
        });

        //localStorage.setItem('token', response.data.token);
        const user = response.data;
      } catch (error) {
        alert(error);
      }
    },
  });

  const touch = true;
  const auth = useAppSelector((store) => store.userState.user?.email )
  if (!isPasswordChange) {
    return (
    <Input
    icon={Hide}
    name="Password"
    type="password"
    placeholder="Password"
    onChange={formik.handleChange}
    value='11111111111'
    touch={touch}
    inputText=''
    />
    )
  }
  
  return (
    <form onSubmit = {formik.handleSubmit}>
      <Input
      icon={Hide}
      name="oldPassword"
      type="password"
      placeholder="Old password"
      onChange={formik.handleChange}
      value={formik.values.oldPassword}
      touch={touch}
      inputText=''
      />
      <Input
      icon={Hide}
      name="newPassword"
      type="password"
      placeholder="New password"
      onChange={formik.handleChange}
      value={formik.values.newPassword}
      touch={touch}
      inputText='Enter your password'
      />
      <Input
      icon={Hide}
      name="repeatPassword"
      type="password"
      placeholder="Password replay"
      onChange={formik.handleChange}
      value={formik.values.repeatPassword}
      touch={touch}
      inputText='Repeat your password without errors'
      />
      <button type="submit">Confirm</button>
    </form>
  );
}

export default PasswordForm;