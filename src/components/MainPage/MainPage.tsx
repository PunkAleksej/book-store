import React from 'react';
import ScrollToTop from '../utils/ScrollToTop';
import Catalog from './MainCatalog';
import Banner from '../topBanner/MainBanner';
import CatalogBar from './MainCatalogBar';
import CatalogBanner from '../bottomBanner/CatalogBanner';
import { useAppDispatch } from '../../store';
import { getGenres } from '../../api/catalog';
import { booksActions } from '../../store/book/reduser';
import PaginationPanel from './elements/PaginationPanel';


const Main:React.FC = () => {
  const dispatch = useAppDispatch();
  (async () => {
    try {
      const responseGenre = await getGenres();
      dispatch(booksActions.loadGenresAndBooks(responseGenre.data));
    } catch (err) {
      // toastsWriter({ text: err.message, style: 'error' });
    }
  })();
  return (
    <div>
      <ScrollToTop />
      <Banner />
      <CatalogBar />
      <Catalog />
      <PaginationPanel />
      <CatalogBanner />
    </div>
  );
};

export default Main;
