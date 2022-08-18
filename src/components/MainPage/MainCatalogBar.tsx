import React, { useState } from 'react';
import { useFormik } from 'formik';
import { MainPageContainer } from './MainCatalogBar.styles';
import toastsWriter from '../utils/Toasts';
import PriceSlider from './elements/PriceSlyder';

const CatalogBar:React.FC = () => {
  const [isActiveSlider, setIsActiveSlider] = useState(false);
  const changeSliderState = () => {
    setIsActiveSlider(!isActiveSlider);
  };
  const formik = useFormik({
    initialValues: {
      genre: '',
      price: '',
      sortBy: '',
    },
    onSubmit: async (values) => {
      try {
        const response = '';
      } catch (error: any) {
        const errorText = error.response.data
          ? error.response.data.payload[0].message
          : error.message;
        toastsWriter({ text: errorText, style: 'error' });
      }
    },
  });
  return (
    <MainPageContainer>
        <h1 className="catalog-bar_title">
          Catalog
        </h1>
        <div className="catalog-bar_selectors">
          <button className="catalog-bar_selectors_button">Genre</button>
          <button className="catalog-bar_selectors_button" onClick={changeSliderState}>
            Price
          </button>
          <button className="catalog-bar_selectors_button">Sort by price</button>
          {isActiveSlider ? <PriceSlider /> : null}
        </div>
    </MainPageContainer>
  );
};

export default CatalogBar;
