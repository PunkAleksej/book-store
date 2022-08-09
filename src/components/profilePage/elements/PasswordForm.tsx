import React from 'react';
import { useFormik } from 'formik';
import Input from '../elements/Input';
import { useAppSelector } from "../../../store/index";
import Hide from '../../../assets/images/Hide.svg';
import { changePass } from '../../../api/authentication';
import changePassSchema from '../../schemas/ChangePassSchema';

type PropsPassType = {
  isPasswordChange: boolean;
}

const PasswordForm:React.FC<PropsPassType> = (props) => {
  const { isPasswordChange } = props;
  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      repeatPassword: '',
    },
    validationSchema: changePassSchema,
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

  if (!isPasswordChange) {
    return (
    <Input
    icon={Hide}
    name="Password"
    type="password"
    placeholder="Password"
    onChange={formik.handleChange}
    value='11111111111'
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
      inputText=''
      />
      <Input
      icon={Hide}
      name="newPassword"
      type="password"
      placeholder="New password"
      onChange={formik.handleChange}
      value={formik.values.newPassword}
      inputText='Enter your password'
      />
      <Input
      icon={Hide}
      name="repeatPassword"
      type="password"
      placeholder="Password replay"
      onChange={formik.handleChange}
      value={formik.values.repeatPassword}
      inputText='Repeat your password without errors'
      />
      <button type="submit">Confirm</button>
    </form>
  );
}

export default PasswordForm;