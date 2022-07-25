import React from 'react';
import { InputIconStyle, InputTitleStyle, InputStyle } from './InputStyle';

function Input() {
  return (
    <div>
      <InputIconStyle></InputIconStyle>
      <InputTitleStyle>Password</InputTitleStyle>
      <InputStyle placeholder='Password'></InputStyle>
    </div>
  );
}

export default Input;
