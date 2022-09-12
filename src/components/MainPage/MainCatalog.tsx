import React, { useEffect } from 'react';
import BookCard from './elements/BookCard';
import { BookContainer } from './MainCatalogBar.styles';
import { useAppSelector, useAppDispatch } from '../../store';
import { userActions } from '../../store/user/reduser';
import { getMe } from '../../api/authentication';

const Catalog:React.FC = () => {
  const dispatch = useAppDispatch();
  const booksInStore = useAppSelector((store) => store.bookState.books);
  const user = useAppSelector((store) => store.userState.user);
  const inFavorite = user?.favorite.map((favorite) => (
    favorite.bookId
  ));
  const inCart = user?.cart.map((cart) => (
    cart.bookId
  ));
  const updateUser = async () => {
    try {
      const authResponse = await getMe();
      dispatch(userActions.addUser(authResponse.data.user));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    updateUser();
  }, []);
  return (
    <BookContainer>
        {!!booksInStore.length &&
          booksInStore.map((book) => (
            <BookCard
              key={book.id}
              middleRating={book.middleRating}
              bookName={book.name}
              cover={book.cover}
              price={book.price}
              author={book.author}
              bookId={book.id}
              isFavorite={inFavorite?.indexOf(+book.id) !== -1 }
              isCart={inCart?.indexOf(+book.id) !== -1 }
            />
          ))
        }
    </BookContainer>
  );
};

export default Catalog;
