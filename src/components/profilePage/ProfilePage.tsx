import React from 'react';
import './ProfilePageStyles';
import { Link } from "react-router-dom";
import Footer from '../Footer/Footer';
import './test.css';
import { ProfileContainer, ProfileImg, ProfileMenuInput } from './ProfilePageStyles';
import Input from './elements/Input';

function ProfilePage() {
  return (
    <div>
      <ProfileContainer>
        <ProfileImg></ProfileImg>
        <div className='profile_info'>
          <h2 className='profile_info_title'>Personal information</h2>
          <ProfileMenuInput placeholder='Your name'></ProfileMenuInput>
          <ProfileMenuInput placeholder='Your email'></ProfileMenuInput>
          <h2>Password</h2>
          <div>
            <img className='testIcon' alt=''/>
            <div className='testColumn'>Password</div>
            <input placeholder='Password' className='testInput'></input>
          </div>
        </div>
      </ProfileContainer>
      <Link to="/">Main Page</Link>
      <Link to="/auth">Auth Page</Link>
      <Input></Input>
      
      <Footer></Footer>
    </div>
  );
}

export default ProfilePage;
