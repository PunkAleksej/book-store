import React, { useState } from 'react';
import { useAppSelector } from "../../store/index";
import { ProfileContainer, PageContainer } from './ProfilePageStyles';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PasswordForm from './elements/PasswordForm';
import UserInfoForm from './elements/UserInfoForm';
import ProfilePhoto from './elements/ProfilePhoto';


const ProfilePage:React.FC = () => {
  const [ isPasswordChange, setIsPasswordChange ] = useState(false);
  function changePassState () {
    setIsPasswordChange(!isPasswordChange)
  }
  const [ isUserInfoChange, setIsUserInfoChange ] = useState(false);
  function changeUserInfoState () {
    setIsUserInfoChange(!isUserInfoChange)
  }
  
  return (
    <PageContainer>
      <Header></Header>
      <ProfileContainer>
        <ProfilePhoto />
        <div>
          <div className="profile_info">
            <h2 className="profile_info_title">Personal information</h2>
            <p className="profile_info_text" onClick={changeUserInfoState}>Change information</p>
          </div>
          <UserInfoForm
          isUserInfoChange={isUserInfoChange}
          ></UserInfoForm>
          <div className="profile_info">
            <h2 className="profile_info_title">Password</h2>
            <p className="profile_info_text" onClick={changePassState}>Change password</p>
          </div>
          <PasswordForm
          isPasswordChange={isPasswordChange}
          ></PasswordForm>
        </div>
      </ProfileContainer>
      <Footer />
    </PageContainer>
  );
}

export default ProfilePage;
