import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
  Password: Yup.string()
    .min(8, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  RepeatPassword: Yup.string().oneOf([Yup.ref('Password'), null], 'Passwords must match'),
  Email: Yup.string().email('Invalid email').required('Required'),
});

export default signUpSchema;