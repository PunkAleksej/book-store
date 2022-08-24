import React from 'react';
import StyledFilterOption from './FilterButton.styles';
import checked from '../../../assets/images/GenreCheker.svg';

type PropsType = {
  text: string;
  id: number;
  isSelected: boolean;
  handleClick: (id: number) => void;
};

const FilterOption: React.FC<PropsType> = (props) => {
  return (
    <StyledFilterOption isChecked={props.isSelected}>
      <button
        className="option__button"
        onClick={() => {
          return props.handleClick(props.id);
        }}
      >
        <div className="option__checkbox">
          <img src={checked} alt="✓" className="option__checked" />
        </div>
        {props.text}
      </button>
    </StyledFilterOption>
  );
};

export default FilterOption;
