import React from 'react';
import StyledFilterOption from './FilterButton.styles';
import checked from '../../../../assets/images/GenreCheker.svg';

type PropsType = {
  text: string;
  id: string;
  isSelected: boolean;
  handleClick: (id: string) => void;
};

const FilterOption: React.FC<PropsType> = (props) => {
  return (
    <StyledFilterOption isChecked={props.isSelected}>
      <button
        className="option_button"
        onClick={() => {
          return props.handleClick(props.id);
        }}
      >
        <div className="option_checkbox">
          <img src={checked} alt="✓" className="option_checked" />
        </div>
        {props.text}
      </button>
    </StyledFilterOption>
  );
};

export default FilterOption;
