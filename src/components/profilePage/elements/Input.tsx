import React from 'react';
import { InputIconStyle, InputTitleStyle, InputStyle } from './InputStyle';

const Input:React.FC = () => {
  return (
    <div>
      <InputIconStyle />
      <InputTitleStyle>Password</InputTitleStyle>
      <InputStyle placeholder="Password" />
    </div>
  );
}

export default Input;
