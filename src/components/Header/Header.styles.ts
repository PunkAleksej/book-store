import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import search from '../../assets/images/Search.svg';

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0px auto;
  padding: 24px 0px 90px 0px;
  display: flex;
  justify-content: space-between;

  .header_text {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    letter-spacing: 0px;
    padding: 0px 43px 0px 128px;
    align-self: center;
  }

  .header_logo {
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: cover;
    width: 88px;
    height: 46px;
    margin-top: 8px;
  }

  .header_button {
    margin: auto 0px auto 94px;
  }
  @media only screen and (max-device-width: 1280px){
    max-width: 804px;
    padding: 20px 15px 45px 15px;
    .header_text {
      padding: 0px 73px 0px 50px;
    }

    .header_button {
      margin: auto 0px auto 50px;
    }
    }
`;

export const HeaderInput = styled.input`
  background: ${(props) => props.theme.palette.lightGreen};
  border-radius: 16px;
  border: 0px;
  width: 566px;
  padding: 18px 0px 18px 64px;
  letter-spacing: 0.75px;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Poppins';
  font-style: normal;
  @media only screen and (max-device-width: 1280px){
    width: 183px;
  }
`;
export const InputIconStyle = styled.div`
  width: 24px;
  height:24px;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  margin: 20px 16px 20px 24px;
  @media only screen and (max-device-width: 1280px){
    width: 18px;
    height:18px;
  }
`;
