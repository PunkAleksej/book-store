import React from 'react';
import BookCard from './elements/BookCard';
import { BookContainer } from './MainCatalogBar.styles';
import { useAppSelector } from '../../store';

const Catalog:React.FC = () => {
  const booksInStore = useAppSelector((store) => store.bookState.books);
  const user = useAppSelector((store) => store.userState.user);
  const inFavorite = user?.favorite.map((favorite) => (
    favorite.id
  ));
  const inCart = user?.favorite.map((cart) => (
    cart.id
  ));
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
              author={book.author.name}
              bookId={book.id}
              isFavorite={inFavorite?.indexOf(+book.id) === -1 }
              isCart={inCart?.indexOf(+book.id) === -1 }
            />
          ))
        }
    </BookContainer>
  );
};

export default Catalog;
