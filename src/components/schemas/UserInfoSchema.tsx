import * as Yup from 'yup';

const userInfoSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(4, 'Name too short')
    .max(20, 'Name too long')
    .required('Name required'),
  email: Yup.string()
    .min(8, 'Email too short')
    .max(50, 'Email too long')
    .required('Email required'),
});

export default userInfoSchema;