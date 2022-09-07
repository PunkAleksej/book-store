import styled from 'styled-components';
import YellowStar from '../../../assets/images/Star_yellow.png';
import WhiteStar from '../../../assets/images/Star_white.png';

type BookCoverType = {
  cover: string;
};

export const CardContainer = styled.div<BookCoverType>`
  width: 305px;
  .card_img_background {
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 16px;
    background-image: url(${(props) => props.cover});
  }
  .card_img_bacground_button-container {
    padding: 20px;
    position: absolute;
  }
  .card_button-container {
    padding: 30px 0px 60px 0px;
  }
  .card_img {
    position: relative;
    width: 305px;
    height: 448px;
    margin-bottom: 30px;
  }
  .card_info {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: ${(props) => props.theme.palette.ligthGrey};
  }
  .card_info_book-name {
    margin-block-start: 0em;
    margin-block-end: 0em;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${(props) => props.theme.palette.darkBlue};
  }
  .card_info_book-author {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: ${(props) => props.theme.palette.ligthGrey};
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
  @media only screen and (max-device-width: 1280px){
  width: 254px;
  .card_img_bacground_button-container {
    padding: 16px;
  }
  .card_button-container {
    padding: 30px 0px 30px 0px;
  }
  .card_img {
    width: 254px;
    height: 372px;
  }
  .card_info {
    font-size: 16px;
    line-height: 24px;
  }
  .card_info_book-name {
    font-size: 16px;
    line-height: 24px;
  }
  .card_info_book-author {
    font-size: 16px;
    line-height: 24px;
  }
  .card_info_book-ratting_star {
    width: 18px;
    height: 18px;
  }
  .card_button {
    margin: 30px 0px 60px 0px;
  }
}
`;

type RatingStarType = {
  isActive: boolean;
};

export const RatingStar = styled.div<RatingStarType>`
    background-image: url(${(props) => (props.isActive ? YellowStar : WhiteStar)});
    width: 24px;
    height: 24px;
`;
