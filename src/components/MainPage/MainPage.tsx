import React from 'react';

import Header from './MainHeader';
import Catalog from './MainCatalog';


function Main() {
  return (
    <div className='main_container'>
      <Header></Header>
      <Catalog></Catalog>
    </div>
  );
}

export default Main;
