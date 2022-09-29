import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MainPageContainer } from './MainCatalogBar.styles';
import DropMenuButton from '../elements/dropMenu/Elements/DropButton';
import { useAppDispatch } from '../../store';
import { booksActions } from '../../store/book/reduser';

const CatalogBar:React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsValue = searchParams.get('selectGenres')?.split(',');

  const paramsPriceTo = Number(searchParams.get('priceTo')) || 10000;
  const paramsPriceFrom = Number(searchParams.get('priceFrom')) || 0;
  dispatch(booksActions.changeFilter({
    priceFrom: paramsPriceFrom,
    priceTo: paramsPriceTo,
  }));
  const sortBy = searchParams.get('sortBy') as 'price' | 'author' | 'middleRating' | 'releasedAt' | 'name';
  dispatch(booksActions.changeFilter({ sortBy }));

  const [isActiveSlider, setIsActiveSlider] = useState(false);
  const [isActiveSortPriority, setIsActiveSortPriority] = useState(false);
  const [isActiveGenres, setIsActiveGenres] = useState(false);
  const changeSliderState = () => {
    setIsActiveSlider(!isActiveSlider);
    setIsActiveSortPriority(false);
    setIsActiveGenres(false);
  };
  const changeSortPriorityState = () => {
    setIsActiveSortPriority(!isActiveSortPriority);
    setIsActiveGenres(false);
    setIsActiveSlider(false);
  };
  const changeGenresState = () => {
    setIsActiveGenres(!isActiveGenres);
    setIsActiveSlider(false);
    setIsActiveSortPriority(false);
  };
  
  if (paramsValue) {
    const numberList = paramsValue.map((elem) => +elem)
    dispatch(booksActions.changeFilter({ selectGenres: numberList }));
  } else {
    dispatch(booksActions.changeFilter({ selectGenres: [] }));
  }
  return (
    <MainPageContainer>
        <h2 className="catalog-bar_title">
          Catalog
        </h2>

        <div className="catalog-bar_selectors">
          <DropMenuButton
          buttonText="Genres"
          arrowDirection={isActiveGenres}
          onClick={changeGenresState}
          dropMenuType="genresMenu"
          />
          <DropMenuButton
          buttonText="Price"
          arrowDirection={isActiveSlider}
          onClick={changeSliderState}
          dropMenuType="priceSlider"
          />
          <DropMenuButton
          buttonText="Sort by price"
          arrowDirection={isActiveSortPriority}
          onClick={changeSortPriorityState}
          dropMenuType="sortPriority"
          />

        </div>
    </MainPageContainer>
  );
};

export default CatalogBar;
