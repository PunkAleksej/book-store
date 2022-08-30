import React, { useEffect, useState } from 'react';
import toastsWriter from '../../utils/Toasts';
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

  const choicePrice = () => {
    setSortPriorityChoice('price');
    dispatch(booksActions.changeFilter({ sortBy: 'price' }));
  };
  const choiseAuthor = () => {
    setSortPriorityChoice('author');
    dispatch(booksActions.changeFilter({ sortBy: 'author' }));
  };
  const choiceRating = () => {
    setSortPriorityChoice('middleRating');
    dispatch(booksActions.changeFilter({ sortBy: 'middleRating' }));
  };
  const choiceDate = () => {
    setSortPriorityChoice('releasedAt');
    dispatch(booksActions.changeFilter({ sortBy: 'releasedAt' }));
  };
  const choiceName = () => {
    setSortPriorityChoice('name');
    dispatch(booksActions.changeFilter({ sortBy: 'name' }));
  };
  const updateBooks = async () => {
    try {
      const response = await getFilteredBooks(filterState);
      dispatch(booksActions.loadBooks(response.data));
    } catch (err) {
      toastsWriter({ text: 'Something went wrong!', style: 'error' });
    }
  };

  useEffect(() => {
    updateBooks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, filterState]);
  return (
    <StyledSortPriorityMenu isVisible={props.arrowDirection}>
      <StyledSortPriorityTarget
      className="sort-priority_text"
      isActive={sortPriorityChoice === 'price'}
      onClick={choicePrice}
      >
      Price
      </StyledSortPriorityTarget>
      <StyledSortPriorityTarget
      className="sort-priority_text"
      isActive={sortPriorityChoice === 'name'}
      onClick={choiceName}
      >
      Name
      </StyledSortPriorityTarget>
      <StyledSortPriorityTarget
      className="sort-priority_text"
      isActive={sortPriorityChoice === 'author'}
      onClick={choiseAuthor}
      >
      Author name
      </StyledSortPriorityTarget>
      <StyledSortPriorityTarget
      className="sort-priority_text"
      isActive={sortPriorityChoice === 'middleRating'}
      onClick={choiceRating}
      >
      Rating
      </StyledSortPriorityTarget>
      <StyledSortPriorityTarget
      className="sort-priority_text"
      isActive={sortPriorityChoice === 'releasedAt'}
      onClick={choiceDate}
      >
      Date of issue
      </StyledSortPriorityTarget>
    </StyledSortPriorityMenu>
  );
};

export default SortPriorityMenu;
