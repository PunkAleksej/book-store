import styled from 'styled-components';
import mail from '../../../assets/images/Mail.png';

export const AuthMenuInput = styled.input`
  background: #F0F4EF;
  border-radius: 16px;
  border: 0px;
  width: 413px;
  padding: 18px 0px 18px 64px;
  letter-spacing: 0.75px;
  font-size: 16px;
  line-height: 28px;
  font-family: 'Poppins';
  font-style: normal;
`
export const InputIconStyle = styled.img`
  width: 24px;
  height: 18px;
  background-image: url(${mail});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  margin: 22px 16px 24px 24px;
`