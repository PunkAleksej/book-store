import React from 'react';
import './MainCatalogBarStyle.css';

const CatalogBar:React.FC = () => {
  return (
    <div className="catalog-bar">
        <h1 className="catalog-bar_title">Catalog</h1>
        <div className="catalog-bar_selectors">
          <button className="catalog-bar_selectors_button">AAAAAA</button>
          <button className="catalog-bar_selectors_button">AAAAAA</button>
          <button className="catalog-bar_selectors_button">AAAAAA</button>
        </div>
    </div>
  );
}

export default CatalogBar;
