import React from 'react';
import { useAppSelector } from "../../../store/index";
import { useFormik } from 'formik';
import { updateUser } from '../../../api/authentication';
import Input from '../elements/Input';
import profile from '../../../assets/images/User_profile_gray.svg';
import Mail from '../../../assets/images/Mail.svg';
import userInfoSchema from '../../schemas/UserInfoSchema';

type PropsUserInfoType = {
  isUserInfoChange: boolean;
}

const UserInfoForm:React.FC<PropsUserInfoType> = (props) => {
  const { isUserInfoChange } = props;
  const userInfo = useAppSelector((store) => store.userState.user)
  let userName = '';
  if (userInfo) {
    userName = `${userInfo.firstName}`
  }
  const formik = useFormik({
    initialValues: {
      firstName: userName,
      email: '',
    },
    validationSchema: userInfoSchema,
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

        inputText=''
        />
        <Input
        icon={Mail}
        name="email"
        type="email"
        placeholder="Your email"
        onChange={formik.handleChange}
        value={userInfo? userInfo.email : ''}

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
      inputText=''
      />
      <Input
      icon={Mail}
      name="email"
      type="email"
      placeholder="Your email"
      onChange={formik.handleChange}
      value={formik.values.email}
      inputText=''
      />
      <button type="submit">Confirm</button>
    </form>
  );
}

export default UserInfoForm;