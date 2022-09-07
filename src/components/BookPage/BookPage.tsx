import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ButtonComponent from '../Elements/Button';
import { BookPageContainer, BookPageInfo, RatingStar } from './BookPage.styles';
import { useAppDispatch, useAppSelector } from '../../store';
import heart from '../../assets/images/Heart.svg';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CatalogBanner from '../BottomBanner/CatalogBanner';
import { getBook } from '../../api/catalog';
import BookRatingStars from './elements/BookRatingStars';
import { booksActions } from '../../store/book/reduser';
import Loading from '../LoadingPage/LoadingPage';
import ScrollToTop from '../../components/utils/ScrollToTop';

const BookPage:React.FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const targetBook = useAppSelector((store) => store.bookState.books[0]);
  useEffect(() => {
    (async () => {
      if (!params.id) return;
      const getBookResponse = await getBook({ id: params.id });
      dispatch(booksActions.loadBooks([getBookResponse.data]));
    })();
  }, [dispatch, params.id]);

  if (!targetBook) {
    return <Loading />;
  }
  const bookPrice = `$ ${targetBook.price} USD`;
  const middleRatingStarColor = Math.round(+targetBook.middleRating);
  return (
    <div>
      <ScrollToTop />
      <Header />
      <BookPageContainer>
        <div className="book_cover_container">
          <img className="book_cover_img" src={targetBook.cover}/>
          <div className="book_cover_like-button">
            <ButtonComponent size="small" icon={heart} />
          </div>
        </div>
        <BookPageInfo>
            <h2>{targetBook.name}</h2>
            <h3 className="card_info_author">{targetBook.author.name}</h3>
              <div className="card_info_book-raiting">
                <RatingStar isActive={!!middleRatingStarColor} />
                <p className="card_info_book-ratting_number">{middleRatingStarColor}.0</p>
                <div className="cart_info_book-rating_block">
                    <BookRatingStars
                    targetBookId={targetBook.id}
                    middleRating={middleRatingStarColor}
                    />
                    <div className="card_info_book-ratting_arrow" />
                    <p className="card_info_book-ratting_number">Rate this book</p>
                </div>
              </div>
              <h3 className="card_info_description">Description</h3>
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
