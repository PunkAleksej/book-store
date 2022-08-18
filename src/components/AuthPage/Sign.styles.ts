import styled from 'styled-components';
import manImg from '../../assets/images/man.png';

export const HeightContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const AuthContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0px 80px 80px 80px;
  display: flex;
  margin: 0px auto;
  justify-content: space-between;
  flex-grow: 1;
`;

export const AuthMenu = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0px;
  align-items: center;
  justify-content: center;
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
`;

export const AuthImg = styled.div`
  background-image: url(${manImg});
  background-size: cover;
  background-repeat: no-repeat;
  width: 612px;
  height: 522px;
`;
