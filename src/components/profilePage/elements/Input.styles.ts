import styled from 'styled-components';

type ImgPropsType = {
  icon: string;
};

type InputStyleType = {
  err: string | undefined;
  authInput?: boolean;
};

export const InputContainer = styled.div<InputStyleType>`
  display: flex;
  flex-direction: column;
  color:${(props) => props.theme.palette.darkBlue};
  justify-content: space-between;
  &:last-child:focus-within  {
    .label {
      display: block;
    }
  }
  .label {
    display: ${(p) => (p.authInput ? 'none' : 'block')};
    position: absolute;
    padding: 6px 0px 0px 66px;
  }

  .input {
    background: ${(props) => props.theme.palette.lightGreen};
    border-radius: 16px;
    border: 2px solid ${(props) => props.theme.palette.lightGreen};
    border-color: ${(p) => (p.err ? (props) => props.theme.palette.error : '')};
    width: ${(p) => (p.authInput ? '349px' : '458px')};
    padding: ${(p) => (p.authInput ? '18px 0px 18px 64px' : '30px 0px 6px 64px')};
    outline: none;
    color:#344966;
    &:disabled {
      opacity: 0.5;
      background: ${(props) => props.theme.palette.lightGreen};
    }
    &:focus {
      background-color: ${(props) => props.theme.palette.lightGreen};
      border: 2px solid ${(props) => props.theme.palette.darkBlue};
      padding: 30px 0px 6px 64px;
    }
  }
  .input_info {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.75px;
    color: ${(props) => props.theme.palette.error};
  }

  .text {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: ${(props) => props.theme.palette.darkBlue};
      padding: 9px 0px 30px 0px;
    }
    @media only screen and (max-device-width: 1280px){
    .input {
      width: ${(p) => (p.authInput ? '328px' : '465px')};
    }
    }
`;

export const InputIconStyle = styled.div<ImgPropsType>`
  width: 25px;
  height: 24px;
  background-image: url(${(p) => p.icon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  margin: 22px 16px 24px 24px;
`;
