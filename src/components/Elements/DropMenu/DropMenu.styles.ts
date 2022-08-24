import styled from 'styled-components';

type StyledPropsType = {
  isVisible: boolean;
};

const StyledFilterByGenre = styled.div<StyledPropsType>`

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
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    margin: 26px 0;
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

export default StyledFilterByGenre;
