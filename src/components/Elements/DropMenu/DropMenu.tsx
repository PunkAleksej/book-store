import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';
import { StyledFilterByGenre } from './DropMenu.styles';
import FilterOption from './Elements/FilterButton';
import { booksActions } from '../../../store/book/reduser';

type DropMenuPropsType = {
  direction: number;
};

const FilterByGenre: React.FC<DropMenuPropsType> = (props) => {
  const dispatch = useAppDispatch();
  const genres = useAppSelector((store) => store.bookState.genres);
  const isInitial = useRef(true);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const handleClick = (id: string) => {
    const updatedSelectedGenres = selectedGenres.filter((num) => num !== id);
    if (updatedSelectedGenres.length === selectedGenres.length) {
      updatedSelectedGenres.push(id);
    }
    setSelectedGenres(updatedSelectedGenres);
  };
  useEffect(() => {
    if (isInitial.current) {
      isInitial.current = false;
      return;
    }
    dispatch(booksActions.changeFilter({ selectGenres: selectedGenres.toString() }));
  }, [dispatch, selectedGenres]);
  return (
    <StyledFilterByGenre isVisible={props.direction}>
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
