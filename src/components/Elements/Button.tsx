import React from 'react';
import { StyledTestButton, LoadingIcon } from './Button.Styles';

type ButtonPropsType = {
  text?: string;
  secondaryStyle?: boolean;
  disable?: boolean;
  loading?: boolean;
  type?: string;
};

const ButtonComponent:React.FC<ButtonPropsType> = (props) => {
  return (
    <div>
      <StyledTestButton
      disable={props.disable}
      secondaryStyle={props.secondaryStyle}
      >
        {props.loading ? <LoadingIcon /> : props.text}
      </StyledTestButton>
    </div>
  );
};

export default ButtonComponent;
