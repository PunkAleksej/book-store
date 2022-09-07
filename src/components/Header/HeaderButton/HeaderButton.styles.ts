import styled from 'styled-components';
import profile from '../../../assets/images/User_profile_white.svg';
import heart from '../../../assets/images/Heart.svg';
import cart from '../../../assets/images/Cart.svg';

export const StyledButtonBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin: auto 0px;
  .header_butoon-container {
    position: relative;
  }
  .header_butoon-container_counter {
    position: absolute;
    width: 23px;
    height: 23px;
    left: 33px;
    top: -6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.palette.green};
    color: ${(props) => props.theme.palette.darkBlue};
    border-radius: 50%;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
  }
  .headers_button {
    width: 48px;
    height: 48px;
    margin: auto 0px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.palette.darkBlue};
    background-size: 26px 26px;
    background-repeat: no-repeat;
    background-position:  center;
  }
  .profile {
    background-image: url(${profile});
  }
  .heart {
    background-image: url(${heart});
  }
  .cart {
    background-image: url(${cart});
  }
  @media only screen and (max-device-width: 1280px){
    margin: 0px 0px 0px 80px;
  }
`;
export const ButtonContainer = styled.div`
  margin: 8px 0px auto 91px;
  @media only screen and (max-device-width: 1280px){
    margin: auto 0px auto 47px;
  }
`;
