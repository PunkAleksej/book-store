import React from 'react';
import ScrollToTop from '../utils/ScrollToTop';
import Header from '../Header/Header';
import Catalog from './MainCatalog';
import Banner from '../TopBanner/MainBanner';
import CatalogBar from './MainCatalogBar';
import Footer from '../Footer/Footer';
import CatalogBanner from '../BottomBanner/CatalogBanner';
import { useAppDispatch } from '../../store';
import { getGenres } from '../../api/catalog';
import { booksActions } from '../../store/book/reduser';
// import toastsWriter from '../utils/Toasts';

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
    <div className="main_container">
      <ScrollToTop />
      <Header />
      <Banner />
      <CatalogBar />
      <Catalog />
      <CatalogBanner />
      <Footer />
    </div>
  );
};

export default Main;
