import styled from 'styled-components';

type SortPtiorityPropsType = {
  isActive: boolean;
};

type DropMenuPropsType = {
  isVisible: boolean;
};

export const StyledSortPriorityMenu = styled.div<DropMenuPropsType>`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  width: 197px;
  background-color: ${({ theme }) => theme.palette.lightGreen};
  position: absolute;
  top: 75px;
  left: 0px;
  border-radius: 16px;
  justify-content: flex-start;
  z-index: 100;
  @media only screen and (max-device-width: 1280px){
    width: 255px;
  }
  @media only screen and (max-device-width: 804px){
    top: 60px;

  }
`;

export const StyledSortPriorityTarget = styled.div<SortPtiorityPropsType>`
  padding: 10px 15px;
  text-align: left;
  color: ${(p) => (p.isActive
    ? (props) => props.theme.palette.darkBlue
    : (props) => props.theme.palette.ligthGrey)
};
`;
