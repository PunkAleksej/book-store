import styled from 'styled-components';
import arrowLeft from '../../../assets/images/VectorLeft.png';
import arrowRight from '../../../assets/images/VectorRight.png';

export const PaginationContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 20px 80px 150px 80px; 
  .pagination_panel {
    display: flex;
    margin: 0px auto;
    width: 240px;
    justify-content: space-between;
  }
  .pagination_panel_arrow-left {
    width: 10px;
    height: 16px;
    background-image: url(${arrowLeft});
    background-repeat: no-repeat;
  }
  .pagination_panel_arrow-right {
    width: 10px;
    height: 16px;
    background-image: url(${arrowRight});
    background-repeat: no-repeat;
  }
`;

type PaginationCircleType = {
  isActive: boolean;
};

export const PaginationCircle = styled.div<PaginationCircleType>`
  width: 12px;
  height: 12px;
  border: 1px solid ${(props) => props.theme.palette.darkBlack};
  border-radius: 50%;
  background-color: ${(p) => (p.isActive
    ? (props) => props.theme.palette.darkBlack
    : (props) => props.theme.palette.white)};
`;
