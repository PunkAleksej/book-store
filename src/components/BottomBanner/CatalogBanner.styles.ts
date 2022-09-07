import styled from 'styled-components';
import custle from '../../assets/images/catalogBanner1.png';
import fairy from '../../assets/images/catalogBanner2.png';

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;
  padding: 0px 0px 150px 0px;
  margin: 0px auto;
  .banner_background {
    position: relative;
    width: 100%;
    height: 400px;
    border-radius: 16px;
    background: ${(props) => (props.theme.palette.lightGreen)};
    display: flex;
    margin-top: 62px;
  }
  .banner_custle_container {
    width: 521px;
    height: 462px;
    position: absolute;
    bottom: 0px;
    left: 108px;
  }
  .banner_custle_img {
    width: 100%;
    height: 100%;
  }
  .banner_fairy_container {
    width: 478px;;
    height: 400px;
    position: absolute;
    right: 0px;
  }
  .banner_fairy_img{
    width: 100%;
    height: 100%;
  }
  .banner_text-block {
    position: absolute;
    width: 100%;
    max-width: 415px;
    left: 757px;
  }
  .banner_text-block__text {
    padding: 10px 0px 50px 0px;
    font-size: 20px;
    line-height: 30px;
  }
  @media only screen and (max-device-width: 1280px){
  max-width: 804px;
  padding: 0px 15px 150px 15px;
  .banner_background {
    margin-top: 0px;
  }
  .banner_custle_container {
    width: 389px;
    height: 345px;
    left: 0px;
  }

  .banner_text-block {
    max-width: 236px;
    left: 411px;
    padding: 80px 0px 0px 0px;
  }
  .banner_text-block__text {
    padding: 22px 0px 40px 0px;
    font-size: 16px;
    line-height: 24px;
  }
  .banner_text-block_title {
    font-size: 32px;
    line-height: 48px;
  }
}
`;
