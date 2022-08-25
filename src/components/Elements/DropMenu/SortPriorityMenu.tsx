import React from 'react';
import { StyledSortPriorityMenu } from './SortPriorityMenu.styles';

const SortPriorityMenu: React.FC = () => {
  return (
    <StyledSortPriorityMenu>
      <div className="sort-priority_text">Price</div>
      <div className="sort-priority_text">Name</div>
      <div className="sort-priority_text">Author name</div>
      <div className="sort-priority_text">Rating</div>
      <div className="sort-priority_text">Date of issue</div>
    </StyledSortPriorityMenu>
  );
};

export default SortPriorityMenu;
