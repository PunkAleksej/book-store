import styled from 'styled-components';

export const StyledSortPriorityMenu = styled.div`
  width: 197px;
  height: 226px;
  background-color: ${({ theme }) => theme.palette.lightGreen};
  position: absolute;
  top: 75px;
  right: 5px;
  border-radius: 16px;
  justify-content: flex-start;
  .sort-priority_text {
    padding: 10px 15px;
    text-align: left;
  }
`;
