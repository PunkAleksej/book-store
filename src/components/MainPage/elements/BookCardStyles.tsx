import styled from 'styled-components';
import BookImg from '../../../assets/images/book.png'
import YellowStar from '../../../assets/images/Star_yellow.png'
import Heart from '../../../assets/images/Heart.svg'

export const CardContainer = styled.div`
  width: 305px;
  .card_img_background {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background-image: url(${BookImg});
  }
  .card_img_save {
    background-color: #344966;
    width: 48px;
    height: 48px;
    position: relative;
    left: 20px;
    top: 20px;
    border-radius: 50%;
    background-image: url(${Heart});
    background-repeat: no-repeat;
    background-position: center;
  }
  .card_img {
    width: 305px;
    height: 448px;
    margin-bottom: 30px;
  }
  .card_info {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #B9BAC4;
  }
  .card_info_book-name {
    margin-block-start: 0em;
    margin-block-end: 0em;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #344966;
  }
  .card_info_book-author {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #B9BAC4;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  .card_info_book-raiting {
    display: flex;
    justify-content: space-between;
  }
  .card_info_book-ratting_star {
    background-image: url(${YellowStar});
    width: 24px;
    height: 24px;
  }
  .card_info_book-ratting_number {
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  .card_button {
    width: 100%;
    margin: 30px 0px 60px 0px;
  }
`


