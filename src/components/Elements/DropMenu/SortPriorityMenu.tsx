import React, { useEffect, useState } from 'react';
import { StyledSortPriorityMenu, StyledSortPriorityTarget } from './SortPriorityMenu.styles';
import { booksActions } from '../../../store/book/reduser';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getFilteredBooks } from '../../../api/catalog';

type DropMenuPropsType = {
  direction: number;
};

const SortPriorityMenu: React.FC<DropMenuPropsType> = (props) => {
  const dispatch = useAppDispatch();
  const filterState = useAppSelector((store) => store.bookState.filter);
  const sortPriorityState = useAppSelector((store) => store.bookState.filter.sortBy);
  const [sortPriorityChoice, setSortPriorityChoice] = useState(sortPriorityState);
  const testAxios = async () => {
    try {
      const response = await getFilteredBooks(filterState);
      dispatch(booksActions.loadBooks(response.data));
    } catch (err) {
      console.log(err);
    }
  };
  testAxios();
  const ChoicePrice = () => {
    setSortPriorityChoice('Price');
  };
  const ChoiseAuthor = () => {
    setSortPriorityChoice('Author');
  };
  const ChoiceRating = () => {
    setSortPriorityChoice('Rating');
  };
  const ChoiceDate = () => {
    setSortPriorityChoice('Date');
  };
  const ChoiceName = () => {
    setSortPriorityChoice('Name');
  };
  useEffect(() => {
    dispatch(booksActions.changeFilter({ sortBy: sortPriorityChoice }));
  }, [dispatch, sortPriorityChoice]);
  return (
    <StyledSortPriorityMenu isVisible={props.direction}>
      <StyledSortPriorityTarget
      className="sort-priority_text"
      isActive={sortPriorityChoice === 'Price'}
      onClick={ChoicePrice}
      >
      Price
      </StyledSortPriorityTarget>
      <StyledSortPriorityTarget
      className="sort-priority_text"
      isActive={sortPriorityChoice === 'Name'}
      onClick={ChoiceName}
      >
      Name
      </StyledSortPriorityTarget>
      <StyledSortPriorityTarget
      className="sort-priority_text"
      isActive={sortPriorityChoice === 'Author'}
      onClick={ChoiseAuthor}
      >
      Author name
      </StyledSortPriorityTarget>
      <StyledSortPriorityTarget
      className="sort-priority_text"
      isActive={sortPriorityChoice === 'Rating'}
      onClick={ChoiceRating}
      >
      Rating
      </StyledSortPriorityTarget>
      <StyledSortPriorityTarget
      className="sort-priority_text"
      isActive={sortPriorityChoice === 'Date'}
      onClick={ChoiceDate}
      >
      Date of issue
      </StyledSortPriorityTarget>
    </StyledSortPriorityMenu>
  );
};

export default SortPriorityMenu;
