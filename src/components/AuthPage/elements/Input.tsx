import React, { useEffect } from 'react';
import {
  InputIconStyle,
  InputContainer,
} from './InputStyle';

type InputPropsType = {
  icon: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void;
  err?: string;
  touch: boolean | undefined;
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
};

const Input:React.FC<InputPropsType> = (props) => {
  const {
    icon,
    name,
    type,
    placeholder,
    value,
    onChange,
    err,
    touch,
    onBlur,
  } = props;
  useEffect(() => {
    console.log(err, touch);
  }, [err, touch]);
  let inputText;
  if (err) {
    inputText = err;
  } else {
    if (name === 'Email') {
      inputText = 'Enter your email';
    }
    if (name === 'Password') {
      inputText = 'Enter your password';
    }
  }
  return (
    <div>
      <InputIconStyle
      icon={icon}
      />
      <InputContainer
      err={err}
      >
        <label className="label">{name}</label>
        <input className="input"
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          />
          <p className="text">{inputText}</p>
      </InputContainer>
    </div>
  );
};

export default Input;
