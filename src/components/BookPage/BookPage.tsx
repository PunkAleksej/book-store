import React from 'react';
import ButtonComponent from '../Elements/Button';
import { BookPageContainer, BookPageInfo, RatingStar } from './BookPage.styles';

type BookCatalogType = {
    bookName: string;
    cover: string;
    author: string;
    middleRating: string;
    price: string;
    description: string;
};
  

const BookPage:React.FC<BookCatalogType> = (props) => {
    const bookPrice = `$ ${props.price} USD`;
    const middleRatingStarColor = Math.round(+props.middleRating);
  return (
    <BookPageContainer>
        <div>
            <ButtonComponent></ButtonComponent>
        </div>
            <BookPageInfo>
                <h1>{props.bookName}</h1>
                <h2>{props.author}</h2>
                <div className="card_info_book-raiting">
                    <RatingStar isActive={middleRatingStarColor >= 1} />
                    <RatingStar isActive={middleRatingStarColor >= 2} />
                    <RatingStar isActive={middleRatingStarColor >= 3} />
                    <RatingStar isActive={middleRatingStarColor >= 4} />
                    <RatingStar isActive={middleRatingStarColor >= 5} />
                    <p className="card_info_book-ratting_number">{middleRatingStarColor}.0</p>
                </div>
                <h2>Description</h2>
                <p>{props.description}</p>
                <div>
                    <div>
                        <p>Paperback</p>
                        <ButtonComponent text='Not available'></ButtonComponent>
                    </div>
                    <div>
                        <p>Hardcover</p>
                        <ButtonComponent text='$19.99 USD'></ButtonComponent>
                    </div>
                </div>
            </BookPageInfo>
    </BookPageContainer>
  );
};

export default BookPage;
