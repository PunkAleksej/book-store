import React from 'react';
//import './MainCatalogBarStyle.css';
import { MainPageContainer } from './MainCatalogBarStyle';

const CatalogBar:React.FC = () => {
  return (
    <MainPageContainer>
        <h1 className="catalog-bar_title">Catalog</h1>
        <div className="catalog-bar_selectors">
          <button className="catalog-bar_selectors_button">Genre</button>
          <button className="catalog-bar_selectors_button">Price</button>
          <button className="catalog-bar_selectors_button">Sort by price</button>
        </div>
    </MainPageContainer>
  );
}

export default CatalogBar;
