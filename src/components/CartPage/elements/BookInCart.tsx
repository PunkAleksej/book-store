import React from 'react';
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
  const BookPrice = `$ ${props.price} USD`;
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
      <div className="book_cover" />
      <div>
        <h1 className="book_title">{props.title}</h1>
        <h2 className="book_author">{props.author}</h2>
        <div className="book_buttons-block">
          <div className="book_buttons-block_increment">-</div>
          <div className="book_buttons-block_counter">1</div>
          <div className="book_buttons-block_increment">+</div>
          <div
          className="book_buttons-block_delete"
          onClick={deleteBook}
          />
        </div>
        <h1 className="book_price">{BookPrice}</h1>
      </div>
    </BookInCartStyle>
  );
};

export default BookInCart;
