import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileContainer, ProfileImg, ProfileMenuInput } from '../ProfilePageStyles';
import Footer from '../../Footer/Footer';
import Input from '../elements/Input';
import { useAppSelector } from "../../../store/index";
import Header from '../../Header/Header';
import Hide from '../../../assets/images/Hide.svg';
import { boolean } from 'yup';

type PropsPassType = {
  isPasswordChange: boolean;
}

const PasswordForm:React.FC<PropsPassType> = (props) => {
  const { isPasswordChange } = props;
  const userInfo = useAppSelector((store) => store.userState.user)
  let password = 'any text';

  const touch = true;
  const auth = useAppSelector((store) => store.userState.user?.email )

  if (isPasswordChange) {
    return (
    <Input
    icon={Hide}
    name="Password"
    type="password"
    placeholder="Email"
    value=''
    touch={touch}
    inputText=''
    />
    )
  }
  
  return (
    <div>
      <Input
      icon={Hide}
      name="Old password"
      type="password"
      placeholder="Old password"
      value={password}
      touch={touch}
      inputText=''
      />
      <Input
      icon={Hide}
      name="New password"
      type="password"
      placeholder="New password"
      value={password}
      touch={touch}
      inputText='Enter your password'
      />
      <Input
      icon={Hide}
      name="Password replay"
      type="password"
      placeholder="Password replay"
      value={password}
      touch={touch}
      inputText='Repeat your password without errors'
      />
      <button>Confirm</button>
    </div>
  );
}

export default PasswordForm;