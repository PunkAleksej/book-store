import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Input from './components/AuthPage/elements/Input';
import Mail from './assets/images/Mail.svg';
import Hide from './assets/images/Hide.svg';

// npx eslint .

function TestForm() {
  const signInSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: signInSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
        <div>
          <form onSubmit={formik.handleSubmit}>
            <h1>Log In</h1>

            <Input
            icon={Mail}
            name="email"
            placeholder="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            />
            <p>Enter your email</p>
            <Input
            icon={Hide}
            name="password"
            placeholder="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            />

            <p>Enter your password</p>

            <Link to="/sign-up">reg now</Link>
            <button type="submit">Log In</button>

          </form>

        </div>

  );
}

export default TestForm;
