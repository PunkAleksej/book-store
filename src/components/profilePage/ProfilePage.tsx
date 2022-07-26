import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileContainer, ProfileImg, ProfileMenuInput } from './ProfilePageStyles';
import Footer from '../Footer/Footer';
import './test.css';
import Input from './elements/Input';

function ProfilePage() {
  return (
    <div>
      <ProfileContainer>
        <ProfileImg />
        <div className="profile_info">
          <h2 className="profile_info_title">Personal information</h2>
          <ProfileMenuInput placeholder="Your name" />
          <ProfileMenuInput placeholder="Your email" />
          <h2>Password</h2>
          <div>
            <img className="testIcon" alt="" />
            <div className="testColumn">Password</div>
            <input placeholder="Password" className="testInput" />
          </div>
        </div>
      </ProfileContainer>
      <Link to="/">Main Page</Link>
      <Link to="/auth">Auth Page</Link>
      <Input />

      <Footer />
    </div>
  );
}

export default ProfilePage;
