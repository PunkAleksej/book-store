import React from 'react';
import DropMenuArrow from './DropMenuArrow';
import { StyledDropButtonContainer } from './DropButton.styles';
import SortPriorityMenu from '../SortPriorityMenu';
import PriceSlider from '../PriceSlyder';
import FilterByGenre from '../GenresMenu';

type DropMenuButtonType ={
  buttonText: string;
  arrowDirection: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  dropMenuType: 'sortPriority' | 'priceSlider' | 'genresMenu';
};

const DropMenuButton: React.FC<DropMenuButtonType> = (props) => {
  const { buttonText, arrowDirection, onClick, dropMenuType } = props;

  return (
    <StyledDropButtonContainer>
      <div className="drop_menu__button"
        onClick={onClick}
      >
        {buttonText}
        <DropMenuArrow
        arrowDirection={arrowDirection}
        />
      </div>
      {dropMenuType === 'sortPriority' && arrowDirection
        ? <SortPriorityMenu arrowDirection={arrowDirection} />
        : null}
      {dropMenuType === 'priceSlider' && arrowDirection
        ? <PriceSlider arrowDirection={arrowDirection} />
        : null}

       {dropMenuType === 'genresMenu' && arrowDirection
         ? <FilterByGenre arrowDirection={arrowDirection} />
         : null}
    </StyledDropButtonContainer>
  );
};

export default DropMenuButton;
