import styled from 'styled-components';
import deleteIcon from '../../assets/images/Delete.png';

export const CartContainer = styled.div`
  margin: 0px auto;
  padding: 0px 80px;
  width: 100%;
  max-width: 1280px;
  .book_buttons-block {
    display: flex;
  }
  .book_buttons-block_increment {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.palette.lightGreen};
    text-align: center;
  }
  .book_buttons-blick_delete {
    width: 20px;
    height: 20px;
    background-image: url(${deleteIcon});
  }
`;
