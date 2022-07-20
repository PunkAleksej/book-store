import React from 'react';
import './profile.css';
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className='auth_menu'>
      <h1>Profile</h1>
      <p>name: Alex</p>
      <p>age: 25</p>
      <p>emal: mail.ru</p>
      <Link to="/">Main Page</Link>
      <Link to="/auth">Auth Page</Link>
      
    </div>
  );
}

export default Profile;
