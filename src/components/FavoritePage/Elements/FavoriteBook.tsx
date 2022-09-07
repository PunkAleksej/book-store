import React from 'react';
import { Link } from 'react-router-dom';
import { FavoriteBookStyle } from './FavoriteBook.style';
import { useAppDispatch, useAppSelector } from '../../../store';
import { deleteFromFavorite } from '../../../api/catalog';
import { userActions } from '../../../store/user/reduser';

type BookInCartType = {
  cover: string;
  author: string;
  price: string;
  title: string;
  bookId:string;
};

const FavoriteBook:React.FC<BookInCartType> = (props) => {
  const dispatch = useAppDispatch();
  const BookPrice = `$ ${+props.price / 100} USD`;
  const bookLink = `/book/${props.bookId}`;
  const user = useAppSelector((store) => store.userState.user);
  const deleteBook = async () => {
    if (!user) return;
    const findFavoriteId = () => {
      const findFavorite = user.favorite.filter((elem) => elem.bookId === +props.bookId);
      return findFavorite[0].id.toString();
    };
    try {
      const deleteBookResponse = await deleteFromFavorite({ id: findFavoriteId() });
      dispatch(userActions.addUser(deleteBookResponse.data.user));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <FavoriteBookStyle cover={props.cover}>
      <Link to={bookLink}>
        <div className="book_cover" />
      </Link>
      <div>
        <Link to={bookLink}>
          <h2 className="book_title">{props.title}</h2>
        </Link>
        <h3 className="book_author">{props.author}</h3>
        <h2 className="book_price">{BookPrice}</h2>
        <div
          className="book_buttons-block_delete"
          onClick={deleteBook}
          />
      </div>
    </FavoriteBookStyle>
  );
};

export default FavoriteBook;
