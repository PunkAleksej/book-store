import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store';
import toastsWriter from '../../utils/Toasts';
import { StyledFilterByGenre } from './GenresMenu.styles';
import FilterOption from './Elements/FilterButton';
import { booksActions } from '../../../store/book/reduser';
import { getFilteredBooks } from '../../../api/catalog';

type DropMenuPropsType = {
  arrowDirection: boolean;
};

const FilterByGenre: React.FC<DropMenuPropsType> = (props) => {
  const dispatch = useAppDispatch();
  const genres = useAppSelector((store) => store.bookState.genres);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterState = useAppSelector((store) => store.bookState.filter);
  const value = searchParams.get('selectGenres')?.split(',');
  let numberList: number[] = [];
  if (value) {
    numberList  = value.map((elem) => +elem)
  }
  // const initialGenres = filterState.selectGenres.length ? filterState.selectGenres.slice() : [];
  const initialGenres = numberList.length ? numberList : [];
  const [selectedGenres, setSelectedGenres] = useState<number[]>(initialGenres);
  const handleClick = (id: string) => {
    const numberId = +id;
    const updatedSelectedGenres = selectedGenres.filter((num) => num !== numberId);
    if (updatedSelectedGenres.length === selectedGenres.length) {
      updatedSelectedGenres.push(numberId);
    }
    searchParams.set('selectGenres', updatedSelectedGenres.toString());
    setSearchParams(searchParams);
    setSelectedGenres(updatedSelectedGenres);
    dispatch(booksActions.changeFilter({ selectGenres: updatedSelectedGenres }));
  };
  useEffect(() => {
    //
    if (value) {
      const numberList = value.map((elem) => +elem)
      dispatch(booksActions.changeFilter({ selectGenres: numberList }));
    } else {
      dispatch(booksActions.changeFilter({ selectGenres: [] }));
    }
    //
    const filterResponse = async () => {
      try {
        const response = await getFilteredBooks(filterState);
        dispatch(booksActions.loadBooks(response.data));
      } catch (err) {
        toastsWriter({ text: 'Something went wrong!', style: 'error' });
      }
    };
    filterResponse();
    // dispatch(booksActions.changeFilter({ selectGenres: selectedGenres }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, searchParams]);
  return (
    <StyledFilterByGenre isVisible={props.arrowDirection}>
      <ul className="filter_options" id="genre-filter-options">
        {genres &&
          genres.map((genre) => (
            <FilterOption
              key={genre.id}
              text={genre.name}
              id={genre.id}
              isSelected={selectedGenres.includes(+genre.id)}
              handleClick={handleClick}
            />
          ))
        }
      </ul>
    </StyledFilterByGenre>
  );
};

export default FilterByGenre;
