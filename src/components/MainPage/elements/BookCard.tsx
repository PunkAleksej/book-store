import React from 'react';
import './BookCard.css';

function BookCard() {
  return (
    <div className="card">
      <div className="card_img">
        <div className="card_img_background">
          <div className="card_img_save" />
        </div>
      </div>
      <div className="card_info">
        <h2 className="card_info_book-name">The Chronicles of Narnia</h2>
        <h2 className="card_info_book-author">C. S. Lewis</h2>
        <div className="card_info_book-raiting">
          <div className="card_info_book-ratting_star" />
          <div className="card_info_book-ratting_star" />
          <div className="card_info_book-ratting_star" />
          <div className="card_info_book-ratting_star" />
          <div className="card_info_book-ratting_star" />
          <p className="card_info_book-ratting_number">5.0</p>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
