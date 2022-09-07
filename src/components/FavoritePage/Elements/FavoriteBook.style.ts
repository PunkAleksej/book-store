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
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
  }
  .book_price {
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
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
  .book_title {
    color: ${(props) => props.theme.palette.darkBlack};
  }
  @media only screen and (max-device-width: 1280px){
  .book_cover {
    width: 255px;
    height: 375px;
  }
  .book_title {
    margin: 38px 0px 0px 0px;
  }
  }
`;
