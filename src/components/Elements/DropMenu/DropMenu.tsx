import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';
import StyledFilterByGenre from './DropMenu.styles';
import FilterOption from './FilterButton';

const FilterByGenre: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useAppDispatch();
  const genres =[{id: 1,name: "ffff"}, {id: 2,name: "hhhh"}];
  const isInitial = useRef(true);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  const handleClick = (id: number) => {
    const updatedSelectedGenres = selectedGenres.filter((num) => num !== id);
    if (updatedSelectedGenres.length === selectedGenres.length) {
      updatedSelectedGenres.push(id);
    }
    setSelectedGenres(updatedSelectedGenres);
  };

  return (
    <StyledFilterByGenre isVisible={isVisible}>
      <button
        className="filter__select"
        onClick={() => setIsVisible(!isVisible)}
      >
        Genre
      </button>
      <ul className="filter__options" id="genre-filter-options">
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