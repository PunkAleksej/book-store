import styled from 'styled-components';
import profile from '../../../assets/images/User_profile_white.svg';
import heart from '../../../assets/images/Heart.svg';
import cart from '../../../assets/images/Cart.svg';

export const StyledButtonBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin: auto 0px;
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
`;
export const ButtonContainer = styled.div`
  margin: 8px 0px auto 91px;
`;
