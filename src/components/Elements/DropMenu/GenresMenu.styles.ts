import styled from 'styled-components';

type DropMenuPropsType = {
  isVisible: boolean;
};

export const StyledFilterByGenre = styled.div<DropMenuPropsType>`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  position: absolute;
  top: 50px;
  left: -5px;
  .filter_select {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 200px;
    align-items: center;
    padding: 10px 10px 10px 15px;
    background-color: ${({ theme }) => theme.palette.lightGreen};
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.darkBlue};
    border-radius: 16px;
  }

  .filter_options {
    margin: 26px 0px;
    position: absolute;
    background-color: ${({ theme }) => theme.palette.lightGreen};
    border-radius: 16px;
    padding: 15px;
    font-size: 16px;
    z-index: 20;
    width: 300px;
    cursor: pointer;
    &::before {
      content: ''; 
      position: absolute;
      left: 15px; 
      top: -35px; 
      border: 20px solid transparent;
      border-bottom: 20px solid ${({ theme }) => theme.palette.lightGreen};
      z-index: 10;
    }
  }
`;
