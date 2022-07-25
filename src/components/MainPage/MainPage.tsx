import React from 'react';

import Header from '../Header/Header';
import Catalog from './MainCatalog';
import Banner from './MainBanner';
import CatalogBar from './MainCatalogBar';
import Footer from '../Footer/Footer';
import './MainCatalogBarStyle.css';


function Main() {
  return (
    <div className='main_container'>
      <Header></Header>
      <Banner></Banner>
      <CatalogBar></CatalogBar>
      <Catalog></Catalog>
      <Footer></Footer>
    </div>
  );
}

export default Main;
