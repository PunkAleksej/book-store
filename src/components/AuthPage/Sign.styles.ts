import styled from 'styled-components';

export const HeightContainer = styled.div`
  flex: 1 0 auto; 
  display: flex;
  flex-direction: column;
`;

export const AuthContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1280px;
  padding: 0px 0px 80px 0px;
  display: flex;
  margin: 0px auto;
  justify-content: space-between;
  flex-grow: 1;
  @media only screen and (max-device-width: 1280px){
    padding: 95px 15px 80px 15px;
    flex-wrap: wrap;
  }
  @media only screen and (max-device-width: 804px){
    justify-content: center;
  }
`;

export const AuthMenu = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0px;
  justify-content: start;
  align-items: flex-start;

  .auth-menu {
    &_title {
      color: #0D1821;
      padding-bottom: 60px;
    }

    &_text {
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      color: ${(props) => props.theme.palette.darkBlue};
      padding: 9px 0px 30px 0px;
    }

    &_button {
      margin-top: 30px;
    }
  }
  @media only screen and (max-device-width: 1280px){

    .auth-menu {
    &_title {
      padding-bottom: 50px;
    }

    &_text {
      font-size: 13px;
      line-height: 24px;
      padding: 9px 0px 15px 0px;
    }

    &_button {
      margin-top: 45px;
    }
  }
  }
`;

export const AuthImg = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  width: 612px;
  height: 522px;
  .auth_img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
