import styled from 'styled-components';
import deleteIcon from '../../../assets/images/Delete.png';

type BookInCartType = {
  cover: string;
};

export const FavoriteBookStyle = styled.div<BookInCartType>`
  display: flex;
  padding: 0px 0px 40px 0px;
  .book_author {
    padding: 0px 0px 50px 0px;
  }
  .book_cover {
    background-image: url(${(props) => (props.cover)});
    width: 197px;
    height: 289px;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0px 20px 0px 0px;
  }
  .book_buttons-block {
    display: flex;
    padding: 0px 0px 50px 0px;
  }
  .book_buttons-block_delete {
    width: 20px;
    height: 20px;
    background-image: url(${deleteIcon});
    cursor: pointer;
  }
`;
