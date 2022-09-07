import styled from 'styled-components';
import YellowStar from '../../assets/images/Star_yellow.png';
import WhiteStar from '../../assets/images/Star_white.png';
import BackArrow from '../../assets/images/BackArrow.png';



export const BookPageContainer = styled.div`
    max-width: 1280px;
    width: 100%;
    padding: 60px 0px;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    .book_cover_container {
        width: 522px;
        height: 779px;
        border-radius: 16px;
        position: relative;
    }
    .book_cover_img {
        width: 100%;
        height: 100%;
    }
    .book_cover_like-button {
        position: absolute;
        top: 30px;
        left: 433px;
    }
    @media only screen and (max-device-width: 1280px){
    max-width: 804px;
    padding: 55px 0px;
    .book_cover_container {
        width: 391px;
        height: 584px;
    }
    .book_cover_img {
        width: 100%;
        height: 100%;
    }
    .book_cover_like-button {
        display: none;
    }
    }
`;

export const BookPageInfo = styled.div`
    max-width: 630px;
    .card_info_author {
        padding: 0px 0px 30px 0px;
    }
    .card_info_book-raiting {
        display: flex;
    }
    .card_info_book-ratting_arrow{
        background-image: url(${BackArrow});
        width: 24px;
        height: 24px;
        margin: auto 7px auto 24px;
    }
    .card_info_book-ratting_number {
        margin: auto 0px;
        padding: 0px 41px 0px 0px;
        font-size: 16px;
        line-height: 24px;
        color: ${(props) => props.theme.palette.ligthGrey};
    }
    .card_info_button-block {
        padding: 74px 0px 0px 0px;
        display: flex;
        justify-content: space-between;
    }
    .card_info_button-block_text {
        padding: 0px 0px 14px 0px;
    }
    .cart_info_book-rating_block {
        display: flex;
    }
    .card_info_description {
        padding: 30px 0px 10px 0px;
    }
    @media only screen and (max-device-width: 1280px){
    max-width: 392px;
    .card_info_author {
        padding: 0px 0px 0px 0px;
    }
    .card_info_book-raiting {
        display: block;
    }
    .card_info_book-ratting_arrow{
        background-image: url(${BackArrow});
        width: 24px;
        height: 24px;
        margin: auto 7px auto 10px;
    }
    .card_info_book-ratting_number {
        margin: auto 0px;
        padding: 0px 0px 0px 0px;
        font-size: 16px;
        line-height: 24px;
        color: ${(props) => props.theme.palette.ligthGrey};
    }
    .card_info_button-block {
        padding: 74px 0px 0px 0px;
        display: flex;
        justify-content: space-between;
    }
    .card_info_button-block_text {
        padding: 0px 0px 14px 0px;
    }
    .card_info_description {
        padding: 30px 0px 10px 0px;
    }  
    }
`;

type RatingStarType = {
    isActive: boolean;
};

export const RatingStar = styled.div<RatingStarType>`
    background-image: url(${(props) => (props.isActive ? YellowStar : WhiteStar)});
    width: 28px;
    height: 28px;
    margin: 0px 17px 0px 0px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    @media only screen and (max-device-width: 1280px){
        width: 23px;
        height: 23px;
    }
`;
