import React from 'react';
import { useFormik } from 'formik';
import Input from '../elements/Input';
import Hide from '../../../assets/images/Hide.svg';
import { changePass } from '../../../api/authentication';
import changePassSchema from '../../schemas/ChangePassSchema';
import toastsWriter from '../../utils/Toasts';

type PropsPassType = {
  isPasswordChange: boolean;
};

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
          newPassword: values.newPassword,
        });
        const user = response.data;
        toastsWriter({ text: 'User password is changed', style: 'success' });
      } catch (error: any) {
        const errorText = error.response.data
          ? error.response.data.payload[0].message
          : error.message;
        toastsWriter({ text: errorText, style: 'error' });
      }
    },
  });
  const oldPasswordLabelText = formik.errors.oldPassword ? formik.errors.oldPassword : '';
  const newPasswordLabelText = formik.errors.newPassword ? formik.errors.newPassword : 'Enter your password';
  const repeatPasswordLabelText = formik.errors.repeatPassword ? formik.errors.repeatPassword : 'Repeat your password';

  if (!isPasswordChange) {
    return (
    <Input
    icon={Hide}
    name="Password"
    type="password"
    placeholder="Password"
    onChange={formik.handleChange}
    value="11111111111"
    inputText=""
    />
    );
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
      inputText={oldPasswordLabelText}
      />
      <Input
      icon={Hide}
      name="newPassword"
      type="password"
      placeholder="New password"
      onChange={formik.handleChange}
      value={formik.values.newPassword}
      inputText={newPasswordLabelText}
      />
      <Input
      icon={Hide}
      name="repeatPassword"
      type="password"
      placeholder="Password replay"
      onChange={formik.handleChange}
      value={formik.values.repeatPassword}
      inputText={repeatPasswordLabelText}
      />
      <button type="submit">Confirm</button>
    </form>
  );
};

export default PasswordForm;
