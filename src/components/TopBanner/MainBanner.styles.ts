import styled from 'styled-components';
import BannerImg from '../../assets/images/banner1.png';

export const BannerContainer = styled.div`
  max-width: 1280px;
  margin: 0px auto;
  padding: 0px 15px;
  box-sizing: border-box;
  .banner_book {
    width: 542px;
    height: 250px;
    position: absolute;
    bottom: 0px;
  }
  .banner_book_img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 0.5;
    z-index: 1;
  }
  .banner_info {
    padding: 80px 0px 0px 108px;
    z-index: 2;
  }
  .banner_img {
    width: 406px;
    height: 400px;
    background-image: url(${BannerImg});
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
  .banner_background {
    max-width: calc(100% - 30px);
    position: relative;
    border-radius: 16px;
    background-color: ${(props) => props.theme.palette.lightGreen};
    display: flex;
    gap: 100px;
    min-width: 100%;
  }
  @media only screen and (max-device-width: 1280px){
  
  .banner_info {
    padding: 45px 0px 0px 40px;
  }
  .banner_info_title {
    font-size: 32px;
    line-height: 48px;
  }
  .banner_img {
    width: 328px;
    height: 364px;
    margin: 0px;
    background-size: cover;
  }
  .banner_info_button {
    margin: 0px 0px 50px 0px;
  }
  .banner_book {
    width: 361px;
    height: 220px;
    position: absolute;
    bottom: 0px;
  }
  @media only screen and (max-device-width: 804px){
    width: 100%;
    display: flex;
    .banner_background {
      display: flex;
      min-width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }
    .banner_book {
      width: 300px;
      height: 220px;
      top: 30px;
      margin: 0px auto;
    }
    .banner_img {
      width: 250px;
      height: 280px;
      margin: 0px;
      background-size: cover;
      right: 14px;
    }
  }
}
`;

export const ImgContainer = styled.div`
  width: 406px;
  height: 400px;
  .top-banner_img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
