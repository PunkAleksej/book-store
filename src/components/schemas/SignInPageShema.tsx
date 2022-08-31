import * as Yup from 'yup';

const signInSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password too short')
    .max(20, 'password too long')
    .required('Password required'),
  email: Yup.string().email('Email is not correct').required('Email required'),
});

export default signInSchema;
