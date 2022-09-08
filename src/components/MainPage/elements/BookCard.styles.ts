import styled from 'styled-components';
import YellowStar from '../../../assets/images/Star_yellow.png';
import WhiteStar from '../../../assets/images/Star_white.png';

type BookCoverType = {
  cover: string;
};

export const CardContainer = styled.div<BookCoverType>`
  flex: 0 1 23%;
  .card_img_background_button-container {
    position: absolute;
    top: 20px;
    left: 20px;
  }
  .card_button-container {
    padding: 30px 0px 60px 0px;
  }
  .card_cover_img{
    object-fit: contain;
  }
  .card_link {
    width: 100%;
  }
  .card_img {
    position: relative;
    width: 100%;
    margin-bottom: 30px;
  }
  .card_info {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: ${(props) => props.theme.palette.ligthGrey};
  }
  .card_info_book-name {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    white-space: nowrap;
    max-width: 305px;
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

`;

type RatingStarType = {
  isActive: boolean;
};

export const RatingStar = styled.div<RatingStarType>`
    background-image: url(${(props) => (props.isActive ? YellowStar : WhiteStar)});
    width: 24px;
    height: 24px;
`;
