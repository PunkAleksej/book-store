import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import search from '../../assets/images/Search.svg';

export const HeaderContainer = styled.div`
  max-width: 1280px;
  flex: 0 0 auto;
  width: 100%;
  box-sizing: border-box;
  margin: 0px auto;
  padding: 24px 0px 90px 0px;
  display: flex;
  gap: 150px;
  .header_container {
    display: flex;
    gap: 120px;
    align-items: center;
  }
  .header_text {

  }

  .header_logo {
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: cover;
    width: 88px;
    height: 46px;
    margin-top: 8px;
  }
  .header_buttons {
    order: 3;
  }

  .header_input {
    order: 2;
    width: 100%;
    position: relative;
  }
  @media only screen and (max-device-width: 1280px){
  gap: 80px;
  padding: 20px 15px;
  .header_container {
    gap: 50px;
  }
  }
  @media only screen and (max-device-width: 804px){
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  .header_buttons {
    order: 2;
  }
  .header_input {
    order: 3;
    width: 100%;
  }
  .header_logo {
    width: 62px;
    height: 31px;
    margin-top: 0px;
  }
  .header_container {
    display: flex;
    gap: 0px;
    align-items: center;
  }
  .header_text {
  }
  .header_container {
    gap: 18px;
  }
  }
`;

export const HeaderInput = styled.input`
  background: ${(props) => props.theme.palette.lightGreen};
  width: 100%;
  border-radius: 16px;
  border: 0px;
  text-indent: 64px;
  padding: 18px 0px;
  letter-spacing: 0.75px;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Poppins';
  font-style: normal;
  @media only screen and (max-device-width: 804px){
  }
`;
export const InputIconStyle = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 20px;
  left: 24px;
`;

// import styled from 'styled-components';
// import logo from '../../assets/images/logo.svg';
// import search from '../../assets/images/Search.svg';

// export const HeaderContainer = styled.div`
//   width: 100%;
//   max-width: 1280px;
//   margin: 0px auto;
//   padding: 24px 0px 90px 0px;
//   display: flex;
//   justify-content: space-between;
//   .header_container {
//     display: flex;
//     order: 1;
//   }
//   .header_text {
//     font-weight: 500;
//     font-size: 16px;
//     line-height: 24px;
//     color: #000000;
//     letter-spacing: 0px;
//     padding: 0px 43px 0px 128px;
//     align-self: center;
//   }

//   .header_logo {
//     background-image: url(${logo});
//     background-repeat: no-repeat;
//     background-size: cover;
//     width: 88px;
//     height: 46px;
//     margin-top: 8px;
//   }
//   .header_buttons {
//     order: 3;
//   }
//   /* .header_button {
//     margin: auto 0px auto 94px;
//   } */
//   .header_input {
//     order: 2;
//   }
//   @media only screen and (max-device-width: 1280px){
//     max-width: 804px;
//     padding: 20px 15px 45px 15px;
//     .header_text {
//       padding: 0px 73px 0px 50px;
//     }

//     .header_button {
//       margin: auto 0px auto 50px;
//     }
//     }
//   @media only screen and (max-device-width: 804px){
//     flex-wrap: wrap;
//     .header_input {
//       order: 3;
//     }
//     .header_buttons {
//       order: 2;
//     }
//     .header_logo {
//       width: 62px;
//       height: 31px;
//       margin-top: 8px;
//     }
//     .header_text {
//       font-size: 14px;
//       line-height: 21px;
//       padding: 0px 17px 0px 17px;
//     }
//   }
// `;

// export const HeaderInput = styled.input`
//   background: ${(props) => props.theme.palette.lightGreen};
//   border-radius: 16px;
//   border: 0px;
//   width: 566px;
//   padding: 18px 0px 18px 64px;
//   letter-spacing: 0.75px;
//   font-size: 16px;
//   line-height: 24px;
//   font-family: 'Poppins';
//   font-style: normal;
//   @media only screen and (max-device-width: 1280px){
//     width: 183px;
//   }
//   @media only screen and (max-device-width: 804px){
//     width: 226px;
//     margin: 20px 0px 0px 0px;
//   }
// `;
// export const InputIconStyle = styled.div`
//   width: 24px;
//   height:24px;
//   background-image: url(${search});
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
//   position: absolute;
//   margin: 20px 16px 20px 24px;
//   @media only screen and (max-device-width: 1280px){
//     width: 18px;
//     height:18px;
//   }
//   @media only screen and (max-device-width: 804px){
//     margin: 40px 16px 20px 24px;
//   }
// `;
