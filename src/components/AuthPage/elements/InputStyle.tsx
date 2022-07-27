import styled from 'styled-components';

type ImgPropsType = {
  icon: string;
};

type InputStyleType = {
  err: string | undefined;
};

export const InputContainer = styled.div<InputStyleType>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:last-child:focus-within {
    .label {
      display: block;
    }
  }
  .label {
    display: none;
    position: absolute;
    padding: 6px 0px 0px 66px;
  }

  .input {
    background: #F0F4EF;
    border-radius: 16px;
    border: 2px solid #F0F4EF;
    border-color: ${(p) => (p.err ? '#ED2E7E' : '')};
    width: 413px;
    padding: 18px 0px 18px 64px;
    &:disabled {
      opacity: 0.5;
      background: #F0F4EF;
    }
    &:focus {
      background-color: #F0F4EF;
      border: 2px solid #344966;
      outline: none;
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
    color: #C30052;
  }
`;

export const InputIconStyle = styled.img<ImgPropsType>`
  width: 24px;
  height: 18px;
  background-image: url(${(p) => p.icon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  margin: 22px 16px 24px 24px;
`;
