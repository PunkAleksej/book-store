import styled from 'styled-components';
import logo from '../../images/logo.svg';

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0px auto;
  padding: 24px 80px 90px 80px;
  display: flex;
  justify-content: space-between;
`

// export const Header = styled.div`
//   width: 100%;
//   max-width: 1280px;
//   margin: 0px auto;
//   padding: 24px 80px 90px 80px;
//   display: flex;
//   justify-content: space-between;
// `

export const HeaderLogo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  width: 88px;
  height: 46px;
  margin-top: 8px;
`

export const HeaderText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  padding: 0px 43px 0px 128px;
`

export const HeaderInput = styled.input`
  background: #F0F4EF;
  border-radius: 16px;
  width: 630px;
  height: 64px;
  box-sizing: border-box;
  margin: 0px 98px 0px 0px;
`

export const HeaderButton = styled.button`
  background: #344966;
  border-radius: 16px;
  color: #F0F4EF;
  align-items: center;
  text-align: center;
  letter-spacing: 0.75px;
  padding: 10px 50px;
  max-height: 44px;
  margin: auto 0px;
  font-size: 16px;
  line-height: 24px;
`
