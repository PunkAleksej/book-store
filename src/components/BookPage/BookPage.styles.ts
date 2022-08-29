import styled from 'styled-components';
import YellowStar from '../../../assets/images/Star_yellow.png';
import WhiteStar from '../../../assets/images/Star_white.png';

export const BookPageContainer = styled.div`
    width: 1280px;
    padding: 60px 80px;
    .book_cover {
        width: 522px;
        height: 779px;
        position: relative;
    }
    .book_cover_like-button {
        top: 30px;
        left: 433px;
    }
`;

export const BookPageInfo = styled.div`

`;

type RatingStarType = {
    isActive: boolean;
  };
  
export const RatingStar = styled.div<RatingStarType>`
    background-image: url(${(props) => (props.isActive ? YellowStar : WhiteStar)});
    width: 24px;
    height: 24px;
`;
  