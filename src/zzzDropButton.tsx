import React from 'react';
import DropMenuArrow from './components/Elements/DropMenu/Elements/DropMenuArrow';
import { StyledDropButtonContainer } from './zzzDropButton.style';
import SortPriorityMenu from './components/Elements/DropMenu/SortPriorityMenu';
import PriceSlider from './components/Elements/DropMenu/PriceSlyder';
import FilterByGenre from './zzzTestGenre';

type DropMenuButtonType ={
  buttonText: string;
  direction: number;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  dropMenuType: 'sortPriority' | 'priceSlider' | 'genresMenu';
};

const DropMenuButton: React.FC<DropMenuButtonType> = (props) => {
  const { buttonText, direction, onClick, dropMenuType } = props;

  return (
    <StyledDropButtonContainer>
      <div className="drop_menu__button"
        onClick={onClick}
      >
        {buttonText}
        <DropMenuArrow
        direction={direction}
        />
      </div>
      {dropMenuType === 'sortPriority' && direction
        ? <SortPriorityMenu />
        : null}
      {dropMenuType === 'priceSlider' && direction
        ? <PriceSlider />
        : null}
      {dropMenuType === 'genresMenu' && direction
        ? <FilterByGenre />
        : null}
    </StyledDropButtonContainer>
  );
};

export default DropMenuButton;
