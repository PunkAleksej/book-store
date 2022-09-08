import React from 'react';
import { Link } from 'react-router-dom';
import { BookInCartStyle } from './BookInCart.styles';
import { useAppDispatch, useAppSelector } from '../../../store';
import { deleteFromCart } from '../../../api/catalog';
import { userActions } from '../../../store/user/reduser';

type BookInCartType = {
  cover: string;
  author: string;
  price: string;
  title: string;
  bookId: string;
};

const BookInCart:React.FC<BookInCartType> = (props) => {
  const dispatch = useAppDispatch();
  const BookPrice = `$ ${+props.price / 100} USD`;
  const bookLink = `/book/${props.bookId}`;
  const user = useAppSelector((store) => store.userState.user);
  const deleteBook = async () => {
    if (!user) return;
    const findCartId = () => {
      const findCart = user.cart.filter((elem) => elem.bookId === +props.bookId);
      return findCart[0].id.toString();
    };
    try {
      const deleteBookResponse = await deleteFromCart({ id: findCartId() });
      dispatch(userActions.addUser(deleteBookResponse.data.user));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <BookInCartStyle cover={props.cover}>
      <Link to={bookLink} className="book_cover">
        <img className="book_cover_img" src={props.cover} />
      </Link>
      <div className="book__info">
        <Link to={bookLink}>
          <h2 className="book_title">{props.title}</h2>
        </Link>
        <h3 className="book_author">{props.author}</h3>
        <div className="book_buttons-block">
          <div className="book_buttons-block_increment">-</div>
          <div className="book_buttons-block_counter">1</div>
          <div className="book_buttons-block_increment">+</div>
          <div
          className="book_buttons-block_delete"
          onClick={deleteBook}
          />
        </div>
        <h3 className="book_price">{BookPrice}</h3>
      </div>
    </BookInCartStyle>
  );
};

export default BookInCart;
