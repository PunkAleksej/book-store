import React from 'react';
import ButtonComponent from '../../Elements/Button';
import { CardContainer, RatingStar } from './BookCard.styles';
import heart from '../../../assets/images/Heart.svg';

type BookCatalogType = {
  bookName: string;
  cover: string;
  author: string;
  middleRating: string;
  price: string;
};

const BookCard:React.FC<BookCatalogType> = (props) => {
  const bookPrice = `$ ${props.price} USD`;
  const middleRatingStarColor = Math.round(+props.middleRating);

  return (
    <CardContainer cover={props.cover}>
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
        <h2 className="card_info_book-name">{props.bookName}</h2>
        <h2 className="card_info_book-author">{props.author}</h2>
        <div className="card_info_book-raiting">
          <RatingStar isActive={middleRatingStarColor >= 1} />
          <RatingStar isActive={middleRatingStarColor >= 2} />
          <RatingStar isActive={middleRatingStarColor >= 3} />
          <RatingStar isActive={middleRatingStarColor >= 4} />
          <RatingStar isActive={middleRatingStarColor >= 5} />
          <p className="card_info_book-ratting_number">{middleRatingStarColor}.0</p>
        </div>
      </div>
      <div className="card_button-container">
        <ButtonComponent
        text={bookPrice}
        size="large"
        />
      </div>

    </CardContainer>
  );
};

export default BookCard;
