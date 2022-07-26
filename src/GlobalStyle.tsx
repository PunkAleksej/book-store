import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
  }

  nav, footer, header, aside {
    display: block;
  }
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: Poppins;
  }
  h1  {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    font-family: 'Poppins';
    font-style: normal;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    font-family: 'Poppins';
    font-style: normal;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  h3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    margin-block-start: 0em;
    margin-block-end: 0em;
    letter-spacing: 0.75px;
    font-size: 14px;
    line-height: 24px
  }
  button {
    background: ${(props) => props.theme.palette.darkBlue};
    border-radius: 16px;
    color: ${(props) => props.theme.palette.lightGreen};
    align-items: center;
    text-align: center;
    letter-spacing: 0.75px;
    padding: 10px 50px;
    max-height: 44px;
    margin: auto 0px;
    font-size: 16px;
    line-height: 24px;
    border: 0px;
    outline: none;
    box-shadow: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
  }
  input {
    letter-spacing: 0.75px;
    font-size: 16px;
    line-height: 28px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
  }
  label {
    font-family: 'Poppins';
    font-style: normal;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.75px;
    font-weight: 500;
  }
  a:-webkit-any-link {
    color: '';
    cursor: pointer;
    text-decoration: none;
    text-decoration-line: none;
    text-decoration-thickness: '';
    text-decoration-style: none;
    text-decoration-color: '';
}
@media only screen and (max-device-width: 804px){
  h1  {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    font-family: 'Poppins';
    font-style: normal;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    font-family: 'Poppins';
    font-style: normal;
    margin-block-start: 0em;
    margin-block-end: 0em;

  }
  h3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    margin-block-start: 0em;
    margin-block-end: 0em;
    letter-spacing: 0.75px;
    font-size: 12px;
    line-height: 18px;
  }
}
`;

export default GlobalStyle;
