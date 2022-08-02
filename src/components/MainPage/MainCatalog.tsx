import React from 'react';
import BookCard from './elements/BookCard';
import './MainBannerStyle.css';

const Catalog:React.FC = () => {
  return (
    <div>
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
}

export default Catalog;
