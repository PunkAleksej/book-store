import React from 'react';
import { Link } from 'react-router-dom';
import ButtonComponent from '../../Elements/Button';
import { CardContainer, RatingStar } from './BookCard.styles';
import heart from '../../../assets/images/Heart.svg';
import BookRatingStars from '../../BookPage/elements/BookRatingStars';
import { addToCart, addToFavorite } from '../../../api/catalog';
import { useAppDispatch } from '../../../store';
import { userActions } from '../../../store/user/reduser';
import { getMe } from '../../../api/authentication';

type BookCatalogType = {
  bookName: string;
  cover: string;
  author: string;
  middleRating: string;
  price: string;
  bookId: string;
  isFavorite: boolean;
  isCart: boolean;
};

const BookCard:React.FC<BookCatalogType> = (props) => {
  const dispatch = useAppDispatch();
  const bookPrice = props.isCart ? 'Added to cart' : `$ ${props.price} USD`;
  const middleRatingStarColor = Math.round(+props.middleRating);
  const bookLink = `book/${props.bookId}`;
  const handleClick = async () => {
    try {
      await addToCart({ bookId: props.bookId.toString(), booksQuantity: '1' });
      const authResponse = await getMe();
      dispatch(userActions.addUser(authResponse.data.user));
    } catch (err) {
      console.log(err);
    }
  };
  const addFavorite = async () => {
    try {
      await addToFavorite({ bookId: props.bookId.toString() });
      const authResponse = await getMe();
      dispatch(userActions.addUser(authResponse.data.user));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <CardContainer cover={props.cover}>
      <div className="card_img">
          <Link to={bookLink}><div className="card_img_background" /></Link>
          <div onClick={addFavorite} className="card_img_bacground_button-container">
            <ButtonComponent
            size="small"
            icon={heart}
            disable={props.isFavorite}
            />
          </div>
      </div>
      <div className="card_info">
        <Link to={bookLink}><h2 className="card_info_book-name">{props.bookName}</h2></Link>
        <h2 className="card_info_book-author">{props.author}</h2>
        {/* <div className="card_info_book-raiting">
          <BookRatingStars
            middleRating={middleRatingStarColor}
            targetBookId={props.bookId}
          />
          <p className="card_info_book-ratting_number">{middleRatingStarColor}.0</p>
        </div> */}
        <div className="card_info_book-raiting">
          <RatingStar isActive={middleRatingStarColor >= 1} />
          <RatingStar isActive={middleRatingStarColor >= 2} />
          <RatingStar isActive={middleRatingStarColor >= 3} />
          <RatingStar isActive={middleRatingStarColor >= 4} />
          <RatingStar isActive={middleRatingStarColor >= 5} />
          <p className="card_info_book-ratting_number">{middleRatingStarColor}.0</p>
        </div>
      </div>
      <div onClick={handleClick} className="card_button-container">
        <ButtonComponent
        text={bookPrice}
        size="large"
        secondaryStyle={props.isCart}
        />
      </div>

    </CardContainer>
  );
};

export default BookCard;
