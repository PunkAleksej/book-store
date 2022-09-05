import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export default signUpSchema;
