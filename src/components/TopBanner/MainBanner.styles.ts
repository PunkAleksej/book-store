import styled from 'styled-components';
import BannerImg from '../../assets/images/banner1.png';

export const BannerContainer = styled.div`
  display: flex;
  width: 1280px;
  margin: 0px auto;
  position: relative;
  .banner_info {
    padding: 80px 146px 0px 108px;
  }
  .banner_img {
    width: 406px;
    height: 400px;
    background-image: url(${BannerImg});
    margin: 0px 96px 0px 0px;
    background-repeat: no-repeat;
  }
  .banner_info_title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: ${(props) => props.theme.palette.darkBlack};
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  .banner_info_text {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: ${(props) => props.theme.palette.darkBlue};
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin: 10px 0px 50px 0px
  }
  .banner_info_button {

  }
  @media only screen and (max-device-width: 1280px){
  width: 804px;
  padding: 0px 15px;
  .banner_info {
    padding: 0px 14px 0px 40px;
  }
  .banner_info_title {
    font-size: 32px;
    line-height: 48px;
  }
  .banner_img {
    width: 328px;
    height: 364px;
    position: absolute;
    margin: 0px;
    background-size: cover;
    right: 14px;
    bottom: 0px;
  }
  .banner_info_button {
    margin: 0px 0px 50px 0px;
  }
}
`;
