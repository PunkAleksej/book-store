import styled, { css } from 'styled-components';

export type ButtonPropsType = {
  secondaryStyle?: boolean;
  disable?: boolean;
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
    border: 3px solid ${(props) => props.theme.palette.darkBlack};
    padding: 8px 48px 8px 48px;
  }
  :focus {
    box-shadow: 0px 0px 0px 8px ${(props) => props.theme.palette.lightBlue};
  }
  ${({ disabled, secondaryStyle }) => {
    if (disabled && secondaryStyle) {
      return css`
      border: 1px solid ${(props) => props.theme.palette.ligthGrey};
      color: ${(props) => props.theme.palette.ligthGrey};
      `;
    }
    if (disabled && !secondaryStyle) {
      return css`
      border: 1px solid ${(props) => props.theme.palette.ligthGrey};
      color: ${(props) => props.theme.palette.lightGreen};
      background-color: ${(props) => props.theme.palette.ligthGrey};
      `;
    }
  }}
`;

export const LoadingIcon = styled.div<ButtonPropsType>`
  border: 3px solid ${(props) => props.theme.palette.white};
  border-top: 3px solid ${(p) => (p.secondaryStyle
    ? (props) => props.theme.palette.darkBlack
    : (props) => props.theme.palette.darkBlue)};;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  animation: spin 2s linear infinite;
  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }
`;
