import React from 'react';
import './mainBannerStyle.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='main_menu'>
      <Link to="/profile">Profile Page</Link>
      <Link to="/auth">Auth Page</Link>
      <button>SignIn</button>
      <button>signUp</button>
    </div>
  );
}

export default Header;
