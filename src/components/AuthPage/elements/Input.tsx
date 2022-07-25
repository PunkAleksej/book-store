import React from 'react';
import {
  AuthMenuInput,
  InputIconStyle,
} from './InputStyle';

function Input() {
  return (
    <div>
      <InputIconStyle></InputIconStyle>
      <AuthMenuInput type="text" placeholder='Password replay'/>
    </div>

  );
}

export default Input;