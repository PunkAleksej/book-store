import React from 'react';
import DropMenuArrow from './DropMenuArrow';
import { StyledDropButtonContainer } from './DropButton.styles';
import SortPriorityMenu from '../SortPriorityMenu';
import PriceSlider from '../PriceSlyder';
import FilterByGenre from '../DropMenu';

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
      {dropMenuType === 'sortPriority'
        ? <SortPriorityMenu direction={direction} />
        : null}
      {dropMenuType === 'priceSlider'
        ? <PriceSlider direction={direction} />
        : null}

       {dropMenuType === 'genresMenu'
         ? <FilterByGenre direction={direction} />
         : null}
    </StyledDropButtonContainer>
  );
};

export default DropMenuButton;
