import React from 'react';
import { useFormik } from 'formik';
import { MainPageContainer } from './MainCatalogBar.Styles';
import toastsWriter from '../utils/Toasts';

const CatalogBar:React.FC = () => {
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
        <h1 className="catalog-bar_title">Catalog</h1>
        <div className="catalog-bar_selectors">
          <button className="catalog-bar_selectors_button">Genre</button>
          <button className="catalog-bar_selectors_button">Price</button>
          <button className="catalog-bar_selectors_button">Sort by price</button>
        </div>
    </MainPageContainer>
  );
};

export default CatalogBar;
