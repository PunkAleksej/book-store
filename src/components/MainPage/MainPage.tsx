import React from 'react';

import Header from '../Header/Header';
import Catalog from './MainCatalog';
import Banner from '../TopBanner/MainBanner';
import CatalogBar from './MainCatalogBar';
import Footer from '../Footer/Footer';
import CatalogBanner from '../BottomBanner/CatalogBanner';

const Main:React.FC = () => {
  return (
    <div className="main_container">
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
