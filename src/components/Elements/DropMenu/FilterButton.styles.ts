/* eslint-disable indent */
import styled from 'styled-components';

type StyledPropsType = {
  isChecked: boolean;
};

const StyledFilterOption = styled.li<StyledPropsType>`

  padding: 2px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  .option_button {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    background: none;
    color: ${({ theme }) => theme.palette.darkBlue};
    z-index: 50;
  }

  .option_checkbox {
    width: 24px;
    height: 24px;
    border: 1px ${({ theme }) => theme.palette.darkBlue} solid;
    background: ${({ theme, isChecked }) => (isChecked ? theme.palette.darkBlue : theme.palette.white)};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      background: ${({ theme, isChecked }) => (isChecked ? theme.palette.darkBlue : theme.palette.ligthGrey)};
    }

    :focus {
    box-shadow: -1px -1px 0px 5px ${({ theme, isChecked }) => {
      if (isChecked) {
        return theme.palette.lightBlue;
      }
      return theme.palette.white;
      }};
    background: ${({ theme, isChecked }) => (isChecked ? theme.palette.darkBlue : theme.palette.lightBlue)};
    }

    :disabled {
      background-color: ${({ theme }) => theme.palette.ligthGrey};
    }
  }

  .option__checked {
    display: ${({ isChecked }) => (isChecked ? 'block' : 'none')};
  }
`;

export default StyledFilterOption;
