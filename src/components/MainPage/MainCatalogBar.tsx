import React, { useState } from 'react';
import { MainPageContainer } from './MainCatalogBar.styles';
import DropMenuButton from '../Elements/DropMenu/Elements/DropButton';

const CatalogBar:React.FC = () => {
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
