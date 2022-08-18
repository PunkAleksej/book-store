import styled from 'styled-components';
import BannerImg from '../../assets/images/banner1.png';

export const BannerContainer = styled.div`
  display: flex;
  width: 1280px;
  padding: 0px 80px;
  margin: 0px auto;

  .banner_info {
    padding: 80px 0px 0px 108px;
  }
  .banner_img {
    width: 406px;
    height: 400px;
    background-image: url(${BannerImg});
    padding-right: 96px;
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
    background: #344966;
    border-radius: 16px;
    color: ${(props) => props.theme.palette.lightGreen};
    align-items: center;
    text-align: center;
    letter-spacing: 0.75px;
    padding: 10px 50px;
    max-height: 44px;
    margin: auto 0px;
    font-size: 16px;
    line-height: 24px;
  }
`;
