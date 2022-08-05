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
import { updateUser } from '../../../api/authentication';
import profile from '../../../assets/images/User_profile_gray.svg';
import Mail from '../../../assets/images/Mail.svg';

type PropsUserInfoType = {
  isUserInfoChange: boolean;
}

const changePassShema = Yup.object().shape({
  firstName: Yup.string()
    .min(4, 'Name too short')
    .max(20, 'Name too long')
    .required('Name required'),
  email: Yup.string()
    .min(8, 'Email too short')
    .max(50, 'Email too long')
    .required('Email required'),
});

const UserInfoForm:React.FC<PropsUserInfoType> = (props) => {
  const { isUserInfoChange } = props;
  const userInfo = useAppSelector((store) => store.userState.user)
  let userName = '';
  let userEmail = '';
  if (userInfo) {
    userName = `${userInfo.firstName}`
    userEmail = `${userInfo.email}`
  }
  const formik = useFormik({
    initialValues: {
      firstName: userName,
      email: userEmail,
    },
    validationSchema: changePassShema,
    onSubmit: async (values) => {
      try {
        console.log(values)
        const response = await updateUser({
          firstName: values.firstName,
          email: values.email
        });

        localStorage.setItem('token', response.data.token);
        const user = response.data.user;
      } catch (error) {
        alert(error);
      }
    },
  });
  console.log(formik.errors)
  const touch = true;
  const auth = useAppSelector((store) => store.userState.user?.email )
  if (!isUserInfoChange) {
    return (
      <div>
        <Input
        icon={profile}
        name="name"
        type="name"
        placeholder="Your name"
        onChange={formik.handleChange}
        value={userName}
        touch={touch}
        inputText=''
        />
        <Input
        icon={Mail}
        name="email"
        type="email"
        placeholder="Your email"
        onChange={formik.handleChange}
        value={userEmail}
        touch={touch}
        inputText=''
        />
      </div>
    )
  }
  
  return (
    <form onSubmit = {formik.handleSubmit}>
      <Input
      icon={profile}
      name="firstName"
      type="name"
      placeholder="Your name"
      onChange={formik.handleChange}
      value={formik.values.firstName}
      touch={touch}
      inputText=''
      />
      <Input
      icon={Mail}
      name="email"
      type="email"
      placeholder="Your email"
      onChange={formik.handleChange}
      value={formik.values.email}
      touch={touch}
      inputText=''
      />
      <button type="submit">Confirm</button>
    </form>
  );
}

export default UserInfoForm;