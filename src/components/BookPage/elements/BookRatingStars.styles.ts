import styled from 'styled-components';
import YellowStar from '../../../assets/images/Star_yellow.png';
import WhiteStar from '../../../assets/images/Star_white.png';

type RatingStarType = {
  isActive: boolean;
};

export const RatingStarContainer = styled.div`
  display: flex;
`;

export const RatingStar = styled.div<RatingStarType>`
  background-image: url(${(props) => (props.isActive ? YellowStar : WhiteStar)});
  width: 28px;
  height: 28px;
  margin: 0px 17px 0px 0px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 0px 2px ${(props) => props.theme.palette.green};
    border-radius: 50%;
  }
  @media only screen and (max-device-width: 1280px){
      width: 23px;
      height: 23px;
  }
`;
