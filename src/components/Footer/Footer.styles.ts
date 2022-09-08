import styled from 'styled-components';
import mapImg from '../../assets/images/map.png';
import footerLogo from '../../assets/images/logo_footer.svg';

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.palette.darkBlack};
  .footer__wrapper {
    box-sizing: border-box;
    width: 100%;
    margin: 0px auto;
    padding: 73px 15px;
    display: flex;
    flex: 0 0 auto; 
    max-width: 1280px;
    justify-content: space-around;
  }
  @media only screen and (max-device-width: 804px){
    .footer__wrapper {
      flex-wrap: wrap;
      justify-content: start;
    }
    .flex_container {
      width: 100%;
    }
  }
`;

export const FooterInfoLogo = styled.div`
  background-image: url(${footerLogo});
  background-repeat: no-repeat;
  width: 88px;
  height: 46px;
  padding: 0px 0px 40px 0px;
  @media only screen and (max-device-width: 1280px){
    padding: 0px 0px 30px 0px;
  }
  @media only screen and (max-device-width: 804px){
    width: 100%;
    align-self: center;
  }
`;

export const FooterMenu = styled.div`
  padding: 0px 315px 0px 166px;
  @media only screen and (max-device-width: 1280px){
    padding: 0px 42px 0px 56px;
  }
  @media only screen and (max-device-width: 804px){
    padding: 0px 100px 0px 0px;
    width: 100%;
  }
`;

export const FooterText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: ${(props) => props.theme.palette.lightGreen};
  padding: 0px 0px 5px 0px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-family: 'Poppins';
  font-style: normal;
  @media only screen and (max-device-width: 1280px){
    font-size: 16px;
    line-height: 24px;
  }

`;

export const FooterMapImg = styled.div`
  background-image: url(${mapImg});
  background-repeat: no-repeat;
  width: 413px;
  height: 160px;
  object-fit: contain;
  @media only screen and (max-device-width: 1280px){
    width: 100%
  }
`;
