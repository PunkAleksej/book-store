import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';
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
  const isInitial = useRef(true);
  const filterState = useAppSelector((store) => store.bookState.filter);
  const initialGenres = filterState.selectGenres.length ? filterState.selectGenres.split(',') : [];
  const [selectedGenres, setSelectedGenres] = useState<string[]>(initialGenres);
  const handleClick = (id: string) => {
    const updatedSelectedGenres = selectedGenres.filter((num) => num !== id);
    if (updatedSelectedGenres.length === selectedGenres.length) {
      updatedSelectedGenres.push(id);
    }
    setSelectedGenres(updatedSelectedGenres);
    console.log(selectedGenres)
    dispatch(booksActions.changeFilter({ selectGenres: selectedGenres.toString() }));
    const filterResponse = async () => {
      try {
        const response = await getFilteredBooks(filterState);
        dispatch(booksActions.loadBooks(response.data));
      } catch (err) {
        console.log(err);
      }
    };
    filterResponse();
  };
  useEffect(() => {
    if (isInitial.current) {
      isInitial.current = false;
      return;
    }
    // dispatch(booksActions.changeFilter({ selectGenres: selectedGenres.toString() }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, selectedGenres]);
  return (
    <StyledFilterByGenre isVisible={props.arrowDirection}>
      <ul className="filter_options" id="genre-filter-options">
        {genres &&
          genres.map((genre) => (
            <FilterOption
              key={genre.id}
              text={genre.name}
              id={genre.id}
              isSelected={selectedGenres.includes(genre.id)}
              handleClick={handleClick}
            />
          ))
        }
      </ul>
    </StyledFilterByGenre>
  );
};

export default FilterByGenre;
