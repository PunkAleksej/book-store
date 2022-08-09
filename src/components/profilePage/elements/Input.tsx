import React from 'react';
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
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  inputText: string;
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
    onBlur,
    inputText,
  } = props;

  return (
    <div>
      <InputIconStyle
      icon={icon}
      />
      <InputContainer
      err={err}
      >
        <label className="label">{placeholder}</label>
        <input className="input"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          value={value}
          onBlur={onBlur}
          />
          <p className="text">{inputText}</p>
      </InputContainer>
    </div>
  );
};

export default Input;
