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
    /* object-fit: contain; */
    width: 100%;
  }
  .card_link {
    max-width: 100%;
  }
  .card_img {
    position: relative;
    max-width: 100%;
    margin-bottom: 30px;
  }
  .card_info {
    max-width: 100%;
    color: ${(props) => props.theme.palette.ligthGrey};
  }
  .card_info_book-name {
    /* display: none; */
    font-weight: 500;
    font-size: 20px;
    max-width: 100%;
    line-height: 30px;
    max-height: 30px;
    /* white-space: nowrap; */
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
  /* .card_info_book-ratting_star {
    background-image: url(${YellowStar});
    width: 24px;
    height: 24px;
  } */
  .card_info_book-ratting_number {
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  .card_button {
    max-width: 100%;
    margin: 30px 0px 60px 0px;
  }
  @media only screen and (max-device-width: 1280px){
    flex: 0 1 30%;
  }
  @media only screen and (max-device-width: 804px){
    flex: 0 1 45%
  }
`;

type RatingStarType = {
  isActive: boolean;
};

export const RatingStar = styled.div<RatingStarType>`
    background-image: url(${(props) => (props.isActive ? YellowStar : WhiteStar)});
    background-size: cover;
    width: 24px;
    height: 24px;
    /* @media only screen and (max-device-width: 1280px){
      width: 18px;
      height: 18px;
    }
    @media only screen and (max-device-width: 804px){
      width: 13px;
      height: 13px;
    } */
`;
