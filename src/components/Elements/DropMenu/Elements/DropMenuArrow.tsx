import React from 'react';
import { StyledMenuArrow } from './DropMenuArrow.styles';

type ArrowDirectionType = {
  direction: number;
};

const DropMenuArrow: React.FC<ArrowDirectionType> = (props) => {
  const { direction } = props;
  return (
    <StyledMenuArrow
    direction={direction}
    />
  );
};

export default DropMenuArrow;
