import React, { useEffect, useState } from 'react';
import ButtonComponent from '../Elements/Button';
import { BookPageContainer, BookPageInfo, RatingStar } from './BookPage.styles';
import { useAppDispatch, useAppSelector } from '../../store';
import heart from '../../assets/images/Heart.svg';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CatalogBanner from '../BottomBanner/CatalogBanner';
import { createRating, getGenres } from '../../api/catalog';
import BookRatingStars from './elements/BookRatingStars';
import { booksActions } from '../../store/book/reduser';

type BookCatalogType = {
    bookName: string;
    cover: string;
    author: string;
    middleRating: string;
    price: string;
    description: string;
};

const BookPage:React.FC = () => {
  const dispatch = useAppDispatch();
  const targetBook = useAppSelector((store) => store.bookState.books[0]);
  const handleClick = async (id: string) => {
    try {
      const ratingResponse = await createRating({
        bookId: +targetBook.id.toString(), bookRating: +id,
      });
      console.log('>>', ratingResponse.data.rating.Book.middleRating);
      setMiddleRatingStarColor(Math.round(+ratingResponse.data.rating.Book.middleRating));
    } catch (err) {
      console.log(err);
    }
  };
  const bookPrice = `$ ${targetBook.price} USD`;
  const [middleRatingStarColor, setMiddleRatingStarColor] =
  useState(Math.round(+targetBook.middleRating));
  useEffect(() => {
    // setMiddleRatingStarColor(Math.round(+targetBook.middleRating));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, middleRatingStarColor]);
  return (
  <div>
    <Header />
    <BookPageContainer cover={targetBook.cover}>
      <div className="book_cover">
        <div className="book_cover_like-button">
          <ButtonComponent size="small" icon={heart} />
        </div>
      </div>
      <BookPageInfo>
          <h1>{targetBook.name}</h1>
          <h2 className="card_info_author">{targetBook.author.name}</h2>
            <div className="card_info_book-raiting">
              <RatingStar isActive={!!middleRatingStarColor} />
              <p className="card_info_book-ratting_number">{middleRatingStarColor}.0</p>
              <BookRatingStars bookId={+targetBook.id} middleRating={+targetBook.middleRating} />
              <div className="card_info_book-ratting_arrow" />
              <p className="card_info_book-ratting_number">Rate this book</p>
            </div>
            <h2 className="card_info_description">Description</h2>
            <p>{targetBook.description}</p>
            <div className="card_info_button-block">
              <div>
                <p className="card_info_button-block_text">Paperback</p>
                  <ButtonComponent text="Not available" />
              </div>
                <div>
                  <p className="card_info_button-block_text">Hardcover</p>
                    <ButtonComponent text={bookPrice} />
                </div>
            </div>
      </BookPageInfo>
    </BookPageContainer>
    <CatalogBanner />
    <Footer />
  </div>
  );
};

export default BookPage;
