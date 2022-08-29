import React from 'react';
import { StyledMenuArrow } from './DropMenuArrow.styles';

type ArrowDirectionType = {
  arrowDirection: boolean;
};

const DropMenuArrow: React.FC<ArrowDirectionType> = (props) => {
  const { arrowDirection } = props;
  return (
    <StyledMenuArrow
    arrowDirection={arrowDirection}
    />
  );
};

export default DropMenuArrow;
