import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../store/index';
import { updateUser } from '../../../api/authentication';
import { userActions } from '../../../store/user/reduser';
import Input from '../elements/Input';
import profile from '../../../assets/images/User_profile_gray.svg';
import Mail from '../../../assets/images/Mail.svg';
import userInfoSchema from '../../schemas/UserInfoSchema';
import toastsWriter from '../../utils/Toasts';
import ButtonComponent from '../../Elements/Button';

type PropsUserInfoType = {
  isUserInfoChange: boolean;
};

const UserInfoForm:React.FC<PropsUserInfoType> = (props) => {
  const dispatch = useDispatch();
  const { isUserInfoChange } = props;
  const userInfo = useAppSelector((store) => store.userState.user);
  const userName = userInfo?.firstName ?? '';
  const formik = useFormik({
    initialValues: {
      firstName: userName,
      email: userInfo ? userInfo.email : '',
    },
    validationSchema: userInfoSchema,
    onSubmit: async (values) => {
      try {
        const response = await updateUser({
          firstName: values.firstName,
          email: values.email,
        });

        localStorage.setItem('token', response.data.token);
        dispatch(userActions.updateUser(response.data.user));
        toastsWriter({ text: 'User info is changed', style: 'success' });
      } catch (error: any) {
        const errorText = error.response.data
          ? error.response.data.payload[0].message
          : error.message;
        toastsWriter({ text: errorText, style: 'error' });
      }
    },
  });

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

        inputText=""
        />
        <Input
        icon={Mail}
        name="email"
        type="email"
        placeholder="Your email"
        onChange={formik.handleChange}
        value={userInfo ? userInfo.email : ''}

        inputText=""
        />
      </div>
    );
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
      inputText=""
      />
      <Input
      icon={Mail}
      name="email"
      type="email"
      placeholder="Your email"
      onChange={formik.handleChange}
      value={formik.values.email}
      inputText=""
      />
      <ButtonComponent text="Confirm" type="submit" />
    </form>
  );
};

export default UserInfoForm;
