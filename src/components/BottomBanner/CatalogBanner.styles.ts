import styled from 'styled-components';
import custle from '../../assets/images/catalogBanner1.png';
import fairy from '../../assets/images/catalogBanner2.png';

export const BannerContainer = styled.div`
  display: flex;
  display: none;
  justify-content: space-between;
  width: 1280px;
  padding: 0px 0px 150px 0px;
  margin: 0px auto;
  .banner_background {
    width: 100%;
    height: 400px;
    border-radius: 16px;
    background: #F0F4EF;
    display: flex;
    margin-top: 62px;
  }
  .banner_custle-img {
    width: 521px;
    height: 462px;
    background-image: url(${custle});
    position: absolute;
    margin-left: 108px;
  }
  .banner_fairy-img {
    width: 478px;;
    height: 462px;
    position: absolute;
    background-image: url(${fairy});
    margin-left: 824px;
  }
  .banner_text-block {
    position: absolute;
    width: 100%;
    max-width: 415px;
    margin: 150px 0px 0px 757px;
  }
  .banner_text-block__text {
    padding: 10px 0px 50px 0px;
    font-size: 20px;
    line-height: 30px;
  }
  @media only screen and (max-device-width: 1280px){
    width: 804px;
    position: relative;
    padding: 0px 15px;
  }
  .banner_custle-img {
    width: 389px;
    height: 345px;
    margin-left: 0px;
    position: absolute;
    top: 55px;
  }
  .banner_background {
    margin: 0px 0px 100px 0px;
  }
  .banner_text-block {
    position: absolute;
    width: 100%;
    max-width: 415px;
    margin: 80px 0px 0px 20px;
  }
`;
