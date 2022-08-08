import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProfileContainer, ProfileImg, ProfileMenuInput } from './ProfilePageStyles';
import Footer from '../Footer/Footer';
import './test.css';
import Input from './elements/Input';
import { useAppSelector } from "../../store/index";
import Header from '../Header/Header';
import Mail from '../../assets/images/Mail.svg';
import Hide from '../../assets/images/Hide.svg';
import profile from '../../assets/images/User_profile_gray.svg';
import PasswordForm from './elements/PasswordForm';
import { useAppDispatch } from '../../store';
import { useFormik } from 'formik';
import UserInfoForm from './elements/UserInfoForm';
import ProfilePhoto from './elements/ProfilePhoto';


const ProfilePage:React.FC = () => {
  const userInfo = useAppSelector((store) => store.userState.user)
  let fullUserName = '';
  let userEmail = '';
  if (userInfo) {
    fullUserName = `${userInfo.firstName} ${userInfo.photo}`
    userEmail = `${userInfo.email}`
  }
  const touch = true;
  const [ isPasswordChange, setIsPasswordChange ] = useState(false);
  function ChangePassState () {
    setIsPasswordChange(!isPasswordChange)
  }
  const [ isUserInfoChange, setIsUserInfoChange ] = useState(false);
  function ChangeUserInfoState () {
    setIsUserInfoChange(!isUserInfoChange)
  }
  
  return (
    <div>
      <Header></Header>
      <ProfileContainer>
        <ProfilePhoto />
        <div>
          <div className="profile_info">
            <h2 className="profile_info_title">Personal information</h2>
            <p className="profile_info_text" onClick={ChangeUserInfoState}>Change information</p>
          </div>
          <UserInfoForm
          isUserInfoChange={isUserInfoChange}
          ></UserInfoForm>
          {/* <Input
          icon={profile}
          name="Your name"
          type="email"
          placeholder="Email"
          value={fullUserName}
          touch={touch}
          inputText=''
          />
          <Input
          icon={Mail}
          name="Email"
          type="email"
          placeholder="Email"
          value={userEmail}
          touch={touch}
          inputText=''
          /> */}
          <div className="profile_info">
            <h2 className="profile_info_title">Password</h2>
            <p className="profile_info_text" onClick={ChangePassState}>Change password</p>
          </div>
          {/* <Input
          icon={Hide}
          name="Password"
          type="password"
          placeholder="Email"
          value={userEmail}
          touch={touch}
          inputText=''
          /> */}
          <PasswordForm
          isPasswordChange={isPasswordChange}
          ></PasswordForm>
        </div>
      </ProfileContainer>
      <Footer />
    </div>
  );
}

export default ProfilePage;
