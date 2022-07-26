import React from 'react';
import {
  AuthMenuInput,
  InputIconStyle,
} from './InputStyle';

type InputPropsType = {
  icon: string;
  name: string;
  placeholder: string;
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (e: React.ChangeEvent<any>)=>void;
};

function Input(props: InputPropsType) {
  const { icon, name, placeholder, value, onChange } = props;
  return (
    <label>
      <InputIconStyle
      icon={icon}
      />
      <AuthMenuInput
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      />
    </label>

  );
}

export default Input;
