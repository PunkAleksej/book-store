import styled from 'styled-components';
import InputIcon from '../../../assets/images/Star.svg';

export const InputStyle = styled.input`
  width: 500px;
  align-items: center;
  letter-spacing: 0.75px;
  font-size: 16px;
  line-height: 28px;
  border-radius: 16px;
  border: 0px;
  background-color: #F0F4EF;
  padding: 30px 0px 6px 64px;
`;

export const InputIconStyle = styled.img`
  width: 24px;
  height: 24px;
  background-image: url(${InputIcon});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  margin: 20px 16px 20px 24px;
`;

export const InputTitleStyle = styled.div`
  position: absolute;
  margin: 6px 0px 0px 64px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #344966;
  align-items: center;
  letter-spacing: 0.75px;
`;
