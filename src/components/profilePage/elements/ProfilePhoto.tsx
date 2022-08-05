import React, { useEffect } from 'react';
import styled from 'styled-components';
import profilePhoto from '../../../assets/images/profilePhoto.png';
import Camera from '../../../assets/images/Camera.svg';
import {
  InputIconStyle,
  InputContainer,
} from './InputStyle';
import { useFormik } from 'formik';
import { updateUser } from '../../../api/authentication';
import * as Yup from 'yup';

export const ProfileImg = styled.div`
  background-image: url(${profilePhoto});
  background-size: cover;
  background-repeat: no-repeat;
  width: 305px;
  height: 305px;
  margin: 0px 128px 0px 0px;
`;
export const PhotoInput = styled.input`
  display: ;
`
export const InputButton = styled.button`
  width: 48px;
  height: 48px;
  padding: 0px;
  position: absolute;
  margin: 237px 0px 0px 237px;
  background-color: #344966;
  border-radius: 50%;
  background-image: url(${Camera});
  background-repeat: no-repeat;
  background-size: 26px 26px;
  background-position: center;
`

const changePassShema = Yup.object().shape({
  lastName: Yup.string(),
});

const ProfilePhoto:React.FC = () => {
  const formik = useFormik({
    initialValues: {
      photo: '',
    },
    // validationSchema: changePassShema,
    onSubmit: async (values) => {
      try {
        console.log(values)
        // const response = await updateUser({
        //   lastName: values.photo,
        // });
      } catch (error) {
        alert(error);
      }
    },
  });
  console.log(formik.values)
  return (
    <form onSubmit = {formik.handleSubmit}>
      <InputButton type='submit'></InputButton>
      <PhotoInput
      type="file"
      name="photo"
      onChange={formik.handleChange}
      value={formik.values.photo}
      multiple accept="image/*"
      ></PhotoInput>
      <ProfileImg />
    </form>
  );
};

export default ProfilePhoto;
