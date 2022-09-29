import React, { useState } from 'react';
import { ProfileContainer } from './ProfilePage.styles';
import PasswordForm from './elements/PasswordForm';
import UserInfoForm from './elements/UserInfoForm';
import ProfilePhoto from './elements/ProfilePhoto';

const ProfilePage:React.FC = () => {
  const [isUserInfoChange, setIsUserInfoChange] = useState(false);
  const [isPasswordChange, setIsPasswordChange] = useState(false);

  const changePassState = () => {
    setIsPasswordChange(!isPasswordChange);
  };

  const changeUserInfoState = () => {
    setIsUserInfoChange(!isUserInfoChange);
  };

  return (
      <ProfileContainer>
        <ProfilePhoto />
        <div>
          <div className="profile_info">
            <h3 className="profile_info_title">Personal information</h3>
            <p className="profile_info_text" onClick={changeUserInfoState}>Change information</p>
          </div>
          <UserInfoForm
          isUserInfoChange={isUserInfoChange}
           />
          <div className="profile_info">
            <h3 className="profile_info_title">Password</h3>
            <p className="profile_info_text" onClick={changePassState}>Change password</p>
          </div>
          <PasswordForm
          isPasswordChange={isPasswordChange}
           />
        </div>
      </ProfileContainer>
  );
};

export default ProfilePage;
