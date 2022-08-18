import React from 'react';
import ButtonComponent from '../../Elements/Button';
import { CardContainer } from './BookCard.styles';
import heart from '../../../assets/images/Heart.svg';

function BookCard() {
  return (
    <CardContainer>
      <div className="card_img">
        <div className="card_img_background">
          <div className="card_img_bacground_button-container">
            <ButtonComponent
            size="small"
            icon={heart}
            />
          </div>
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
      <div className="card_button-container">
        <ButtonComponent
        text="$14.99 USD"
        size="large"
        />
      </div>

    </CardContainer>
  );
}

export default BookCard;
