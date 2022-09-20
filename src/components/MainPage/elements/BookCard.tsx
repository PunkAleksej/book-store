import React from 'react';
import { Link } from 'react-router-dom';
import ButtonComponent from '../../Elements/Button';
import { CardContainer, RatingStar } from './BookCard.styles';
import heart from '../../../assets/images/Heart.svg';
import { addToCart, addToFavorite, deleteFromFavorite } from '../../../api/catalog';
import { useAppDispatch, useAppSelector } from '../../../store';
import { userActions } from '../../../store/user/reduser';

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

const BookCard: React.FC<BookCatalogType> = (props) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.userState.user);
  const bookPrice = props.isCart && user ? 'Added to cart' : `$ ${+props.price / 100} USD`;
  const middleRatingStarColor = Math.round(+props.middleRating);
  const bookLink = `book/${props.bookId}`;
  const handleClick = async () => {
    if (!user) return;
    try {
      const addToCartResponse = await addToCart({ bookId: props.bookId.toString(), booksQuantity: '1' });
      dispatch(userActions.addUser(addToCartResponse.data.user));
    } catch (err) {
      console.log(err);
    }
  };
  const linkInCart = props.isCart ? '/cart' : '/';
  const addFavorite = async () => {
    if (!user) return;
    const findFavoriteId = () => {
      const findFavorite = user.favorite.filter((elem) => elem.bookId === +props.bookId);
      return findFavorite[0].id.toString();
    };
    try {
      if (props.isFavorite) {
        const deleteFromFavoriteResponse = await deleteFromFavorite({
          id: findFavoriteId(),
        });
        dispatch(userActions.addUser(deleteFromFavoriteResponse.data.user));
      } else {
        const addToFavoriteResponse = await addToFavorite({ bookId: props.bookId.toString() });
        dispatch(userActions.addUser(addToFavoriteResponse.data.user));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CardContainer cover={props.cover}>
      <div className="card_img">
        <Link to={bookLink} className="card_link">
            <img className="card_cover_img" src={props.cover} />
        </Link>
        <div onClick={addFavorite} className="card_img_background_button-container">
          <ButtonComponent
            size="small"
            icon={heart}
            disable={!user || !props.isFavorite}
          />
        </div>
      </div>
      <div className="card_info">
        <Link to={bookLink} className="card_link">
          <h2 className="card_info_book-name">{props.bookName}</h2>
        </Link>
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
      <Link to={linkInCart}>
        <div onClick={handleClick} className="card_button-container">
          <ButtonComponent
            text={bookPrice}
            size="large"
            secondaryStyle={!!user && props.isCart}
          />
        </div>
      </Link>
    </CardContainer>
  );
};

export default BookCard;
