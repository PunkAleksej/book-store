import React, { useEffect, useState } from 'react';
import { StyledSortPriorityMenu, StyledSortPriorityTarget } from './SortPriorityMenu.styles';
import { booksActions } from '../../../store/book/reduser';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getFilteredBooks } from '../../../api/catalog';

type DropMenuPropsType = {
  arrowDirection: boolean;
};

const SortPriorityMenu: React.FC<DropMenuPropsType> = (props) => {
  const dispatch = useAppDispatch();
  const filterState = useAppSelector((store) => store.bookState.filter);
  const sortPriorityState = useAppSelector((store) => store.bookState.filter.sortBy);
  const [sortPriorityChoice, setSortPriorityChoice] = useState(sortPriorityState);

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
    const updateBooks = async () => {
      try {
        const response = await getFilteredBooks(filterState);
        console.log(response.data)
        dispatch(booksActions.loadBooks(response.data));
      } catch (err) {
        console.log(err);
      }
    };
    updateBooks();
    dispatch(booksActions.changeFilter({ sortBy: sortPriorityChoice }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, sortPriorityChoice]);
  return (
    <StyledSortPriorityMenu isVisible={props.arrowDirection}>
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
