import styled from 'styled-components';

export const EmptyFavoriteContainer = styled.div`
  display: flex;
  padding: 0px 0px 200px 0px;
  .cart_container {
    width: 433px;
    height: 261px;
    margin: 20px 100px;
  }
  .cart_container_img{
    width: 100%;
    height: 100%;
  }
  .cart_info_text {
    padding: 20px 0px 60px 0px;
    color: ${(props) => (props.theme.palette.darkBlue)};
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
  }
  .cart_info_title {
    padding: 20px 0px 0px 0px;
  }
 
  @media only screen and (max-device-width: 1280px){
    padding: 55px 0px 100px 0px;
  .cart_container {
    width: 350px;
    height: 212px;
    margin: 0px 62px 0px 0px;
  }
  .cart_info_text {
    padding: 20px 0px 50px 0px;
    font-size: 16px;
    line-height: 24px;
  }
  .cart_info_title {
    padding: 0px 0px 0px 0px;
    font-size: 32px;
    line-height: 48px;
  }
}
`;
