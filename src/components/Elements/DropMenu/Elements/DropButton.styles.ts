import styled from 'styled-components';

export const StyledDropButtonContainer = styled.div`
  position: relative;
  .drop_menu__button {
    position: relative;
    margin: auto 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 175px;
    align-items: center;
    padding: 10px 10px 10px 15px;
    background-color: ${({ theme }) => theme.palette.lightGreen};
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.darkBlue};
    border-radius: 16px;
  }
  @media only screen and (max-device-width: 1280px){
  .drop_menu__button {
    width: 230px;
  }
  @media only screen and (max-device-width: 804px){
    .drop_menu__button {
    width: 75%;
  }
  }
  }
`;
