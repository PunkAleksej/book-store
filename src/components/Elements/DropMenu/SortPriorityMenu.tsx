import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import toastsWriter from '../../utils/Toasts';
import { StyledSortPriorityMenu, StyledSortPriorityTarget } from './SortPriorityMenu.styles';
import { booksActions } from '../../../store/book/reduser';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getFilteredBooks } from '../../../api/catalog';

type DropMenuPropsType = {
  arrowDirection: boolean;
};

type SortPriorityType = {
  title: string;
  type: 'price' | 'author' | 'middleRating' | 'releasedAt' | 'name';
};

const SortPriorityMenu: React.FC<DropMenuPropsType> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filterState = useAppSelector((store) => store.bookState.filter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    updateBooks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, filterState]);

  const updateBooks = async () => {
    try {
      const response = await getFilteredBooks(filterState);
      dispatch(booksActions.loadBooks(response.data));
    } catch (err) {
      toastsWriter({ text: 'Something went wrong!', style: 'error' });
    }
  };

  // useEffect(() => {
  //   const sortBy = searchParams.get('sortBy') as 'price' | 'author' | 'middleRating' | 'releasedAt' | 'name';
  //   dispatch(booksActions.changeFilter({ sortBy }));
  // }, [dispatch, searchParams]);

  const handleClick = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (ev.currentTarget.textContent) {
      let touchedColumn = ev.currentTarget.textContent.toLowerCase();
      if (touchedColumn === searchParams.get('sortBy')) {
        return;
      }
      if (touchedColumn === 'date of issue') {
        touchedColumn = 'releasedAt';
      }
      if (touchedColumn === 'rating') {
        touchedColumn = 'middleRating';
      }
      searchParams.set('sortBy', touchedColumn);
      setSearchParams(searchParams);
    }
  };

  const sortPriorityArray: SortPriorityType[] = [
    { title: 'Price', type: 'price' },
    { title: 'Name', type: 'name' },
    { title: 'Author', type: 'author' },
    { title: 'Rating', type: 'middleRating' },
    { title: 'Date of issue', type: 'releasedAt' },
  ];
  return (
    <StyledSortPriorityMenu isVisible={props.arrowDirection}>
        {sortPriorityArray &&
          sortPriorityArray.map((sortPriority) => (
            <StyledSortPriorityTarget
              key={sortPriority.title}
              onClick={handleClick}
              isActive={filterState.sortBy === sortPriority.type }
            >{sortPriority.title}
            </StyledSortPriorityTarget>
          ))
        }
    </StyledSortPriorityMenu>
  );
};

export default SortPriorityMenu;
