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
  height: 226px;
  background-color: ${({ theme }) => theme.palette.lightGreen};
  position: absolute;
  top: 75px;
  right: 5px;
  border-radius: 16px;
  justify-content: flex-start;
`;

export const StyledSortPriorityTarget = styled.div<SortPtiorityPropsType>`
    padding: 10px 15px;
    text-align: left;
    color: ${(p) => (p.isActive
    ? (props) => props.theme.palette.darkBlue
    : (props) => props.theme.palette.ligthGrey)
};
`;
