import styled, { css } from 'styled-components';

export type ButtonPropsType = {
  secondaryStyle?: boolean;
  disable?: boolean;
  size?: 'very_small' |'small' | 'medium' | 'large';
  icon?: string;
  loading?: boolean;
};

export const StyledTestButton = styled.button<ButtonPropsType>`
  background-color: ${(p) => (p.secondaryStyle
    ? (props) => props.theme.palette.white
    : (props) => props.theme.palette.darkBlue)};

  border: 1px solid ${(p) => (p.secondaryStyle
    ? (props) => props.theme.palette.darkBlack
    : (props) => props.theme.palette.darkBlue)};
    
  color: ${(p) => (p.secondaryStyle
    ? (props) => props.theme.palette.darkBlack
    : (props) => props.theme.palette.white)};
  :hover {
    background-color: ${(p) => (p.secondaryStyle
    ? (props) => props.theme.palette.white
    : (props) => props.theme.palette.darkBlack)};
  }
  :active {
    box-shadow: 0px 0px 0px 8px ${(props) => props.theme.palette.lightBlue};
  }
  ${({ disable, secondaryStyle }) => {
    if (disable && secondaryStyle) {
      return css`
      border: 1px solid ${(props) => props.theme.palette.darkBlue};
      color: ${(props) => props.theme.palette.ligthGrey};
      `;
    }
    if (disable && !secondaryStyle) {
      return css`
      /* background-color: ${(props) => props.theme.palette.ligthGrey}; */
      border: 1px solid ${(props) => props.theme.palette.darkBlue};
      color: ${(props) => props.theme.palette.lightGreen};
      opacity: 0.5;
      `;
    }
  }}
  ${({ size, icon, loading }) => {
    switch (size) {
      case 'large':
        return css`
        width: 100%;
        :hover {
          border: 3px solid ${(props) => props.theme.palette.darkBlack};
          padding: 8px 48px 8px 48px;
        }
        `;
        break;
      case 'small':
        return css`
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-size: 26px 26px;
        background-repeat: no-repeat;
        background-position:  center;
        background-image: url(${loading ? '' : icon});
        padding: 0px;
        `;
        break;
      case 'very_small':
        return css`
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-size: 17px;
        background-repeat: no-repeat;
        background-position:  center;
        background-image: url(${loading ? '' : icon});
        padding: 0px;
        `;
        break;
      default:
        break;
    }
  }}
`;

export const LoadingIcon = styled.div<ButtonPropsType>`
  border: 3px solid ${(p) => (p.secondaryStyle
    ? (props) => props.theme.palette.darkBlack
    : (props) => props.theme.palette.white)};
  border-top: 3px solid ${(p) => (p.secondaryStyle
    ? (props) => props.theme.palette.white
    : (props) => props.theme.palette.darkBlue)};
  border-radius: 50%;
  margin: auto;
  width: 14px;
  height: 14px;
  animation: spin 2s linear infinite;
  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }
`;
