import styled from 'styled-components';
import emptyCart from '../../../assets/images/empty-cart.png';

export const EmptyCartContainer = styled.div`
  display: flex;
  .cart_book-img {
    width: 433px;
    height: 261px;
    background-image: url(${emptyCart});
    margin: 20px 100px;
  }
  .cart_info_text {
    padding: 20px 0px 60px 0px;
    color: ${(props) => (props.theme.palette.darkBlue)};
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
  }
  .cart_info_title {
    padding: 20px 0px 0px 0px;
  }
`;
