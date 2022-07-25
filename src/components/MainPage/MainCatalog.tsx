import React from 'react';
import BookCard from './elements/BookCard';
import './MainBannerStyle.css';

function Catalog() {
  return (
    <div>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
    </div>
  );
}

export default Catalog;
