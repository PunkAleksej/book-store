import styled from 'styled-components';

export const FavoriteContainer = styled.div`
  margin: 0px auto;
  padding: 0px 80px;
  width: 100%;
  max-width: 1280px;
  .cart_separator_line {
    width: 100%;
    height: 1px;
    background-color: ${(props) => (props.theme.palette.lightBlue)};
    margin: 0px 0px 40px 0px;
  }
  .cart_buttons {
    padding: 30px 0px 110px 0px;
    display: flex;
    flex-wrap: nowrap;
  }
  .cart_buttons_second-button {
    margin: 0px 20px;
  }
`;
