import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store';
import { PaginationContainer, PaginationCircle } from './PaginationPanel.styles';
import { getFilteredBooks } from '../../../api/catalog';
import { booksActions } from '../../../store/book/reduser';
import toastsWriter from '../../utils/Toasts';

const PaginationPanel: React.FC = () => {
  const filterState = useAppSelector((store) => store.bookState.filter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    updateBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterState.page]);

  const updateBooks = async () => {
    try {
      const response = await getFilteredBooks(filterState);
      dispatch(booksActions.loadBooks(response.data));
    } catch (err) {
      toastsWriter({ text: 'Something went wrong!', style: 'error' });
    }
  };
  return (
    <PaginationContainer>
      <div className="pagination_panel">
        <div
          className="pagination_panel_arrow-left"
          onClick={() => dispatch(booksActions.changeFilter({
            ...filterState,
            page: filterState.page - 1,
          }))}
        />
        <PaginationCircle
          isActive={filterState.page === 1}
        />
        <PaginationCircle
          isActive={filterState.page === 2}
        />
        <PaginationCircle
          isActive={filterState.page === 3}
        />
        <div
          className="pagination_panel_arrow-right"
          onClick={() => dispatch(booksActions.changeFilter({
            ...filterState,
            page: filterState.page + 1,
          }))}
        />
      </div>
    </PaginationContainer>
  );
};

export default PaginationPanel;
