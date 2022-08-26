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
        <h1 className="catalog-bar_title">
          Catalog
        </h1>

        <div className="catalog-bar_selectors">
          <DropMenuButton
          buttonText="Genres"
          direction={isActiveGenres ? 1 : 0}
          onClick={changeGenresState}
          dropMenuType="genresMenu"
          />
          <DropMenuButton
          buttonText="Price"
          direction={isActiveSlider ? 1 : 0}
          onClick={changeSliderState}
          dropMenuType="priceSlider"
          />
          <DropMenuButton
          buttonText="Sort by price"
          direction={isActiveSortPriority ? 1 : 0}
          onClick={changeSortPriorityState}
          dropMenuType="sortPriority"
          />

        </div>
    </MainPageContainer>
  );
};

export default CatalogBar;
