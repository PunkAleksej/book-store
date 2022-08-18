import styled from 'styled-components';
import mapImg from '../../assets/images/map.png';
import footerLogo from '../../assets/images/logo_footer.svg';

export const FooterContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.palette.darkBlack};
  margin: 0px auto;
`;

export const Footerf = styled.div`
  margin: 0px auto;
  width: 100%;
  max-width: 1280px;
  padding: 73px 80px;
  display: flex;
  justify-content: space-between;
`;

export const FooterInfoLogo = styled.div`
  background-image: url(${footerLogo});
  background-repeat: no-repeat;
  width: 88px;
  height: 46px;
  padding: 0px 0px 40px 0px;
`;

export const FooterMenu = styled.div`
  padding: 0px 315px 0px 166px;
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
`;

export const FooterMapImg = styled.div`
  background-image: url(${mapImg});
  background-repeat: no-repeat;
  width: 413px;
  height: 160px;
`;
