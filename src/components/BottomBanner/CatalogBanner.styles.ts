import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  max-width: 1280px;
  width: 100%;
  padding: 0px 0px 150px 0px;
  margin: 0px auto;
  .banner_background {
    position: relative;
    width: 100%;
    min-height: 400px;
    border-radius: 16px;
    background: ${(props) => (props.theme.palette.lightGreen)};
    display: flex;
    margin-top: 62px;
  }
  .banner_custle_container {
    height: 80%;
    margin: auto 0px 0px 0px;
  }
  .banner_custle_img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  .banner_fairy_container {
    width: 40%;
    height: 100%;
    position: absolute;
    right: 0px;
  }
  .banner_fairy_img{
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  .banner_text-block {
    width: 50%;
    margin: 50px 0px 0px 0px;
  }
  .banner_text-block__text {
    padding: 10px 0px 50px 0px;
    font-size: 20px;
    line-height: 30px;
  }
  @media only screen and (max-device-width: 1280px){
  }
  @media only screen and (max-device-width: 804px) {
    .banner_background {
      flex-direction: column;
    }
    .banner_text-block {
      order: 1;
      margin: 0px auto 30px auto;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .banner_custle_container{
      order: 2;
      width: 80%;
      margin: 0px auto;
    }
    .banner_fairy_container {
      display: none;
    }
  }
`;
