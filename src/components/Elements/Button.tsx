import React from 'react';
import { StyledTestButton, LoadingIcon } from './Button.styles';

type ButtonPropsType = {
  text?: string;
  secondaryStyle?: boolean;
  disable?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium' | 'large';
  icon?: string;
};

const ButtonComponent: React.FC<ButtonPropsType> = (props) => {
  return (
    <StyledTestButton
      disable={props.disable}
      secondaryStyle={props.secondaryStyle}
      icon={props.icon}
      size={props.size}
      loading={props.loading}
      type={props.type}
    >
      {props.loading
        ? <LoadingIcon secondaryStyle={props.secondaryStyle} />
        : props.text}
    </StyledTestButton>
  );
};

export default ButtonComponent;
