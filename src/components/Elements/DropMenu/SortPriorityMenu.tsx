import React, { useEffect } from 'react';
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
  const filterState = useAppSelector((store) => store.bookState.filter);
  const sortPriorityState = useAppSelector((store) => store.bookState.filter.sortBy);
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
              onClick={() => dispatch(booksActions.changeFilter({ sortBy: sortPriority.type }))}
              isActive={sortPriorityState === sortPriority.type }
            >{sortPriority.title}
            </StyledSortPriorityTarget>
          ))
        }
    </StyledSortPriorityMenu>
  );
};

export default SortPriorityMenu;
