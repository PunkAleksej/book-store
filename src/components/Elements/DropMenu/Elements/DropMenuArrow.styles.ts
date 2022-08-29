import styled from 'styled-components';
import arrowIcon from '../../../../assets/images/ArrowRight.png';

type StyledPropsType = {
  arrowDirection: boolean;
};

export const StyledMenuArrow = styled.div<StyledPropsType>`
  width: 16px;
  height: 16px;
  background-image: url(${arrowIcon});
  background-position: center;
  background-repeat: no-repeat;
  transform: ${(props) => (props.arrowDirection ? 'rotate(90deg)' : 'rotate(0deg)')};
`;
