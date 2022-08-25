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

// import React from 'react';
// import DropMenuArrow from './DropMenuArrow';
// import { StyledDropMenuButton } from './DropButton.styles';
// import SortPriorityMenu from '../SortPriorityMenu';

// type DropMenuButtonType ={
//   buttonText: string;
//   direction: number;
//   onClick: (e: React.MouseEvent<HTMLElement>) => void;
//   dropMenuType: 'sortPriority' | 'priceClider';
// };

// const DropMenuButton: React.FC<DropMenuButtonType> = (props) => {
//   const { buttonText, direction, onClick, dropMenuType } = props;
//   return (
//     <StyledDropMenuButton
//       onClick={onClick}
//     >
//       {buttonText}
//       <DropMenuArrow
//       direction={direction}
//       />
//       {dropMenuType === 'sortPriority' && direction
//         ? <SortPriorityMenu />
//         : null}
//     </StyledDropMenuButton>

//   );
// };

// export default DropMenuButton;
