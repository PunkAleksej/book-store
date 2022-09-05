import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { FavoriteContainer } from './FavoritePage.styles';
import { useAppSelector } from '../../store';
import FavoriteBook from './Elements/FavoriteBook';
import EmptyFavorite from './Elements/EmptyFavorite';
import { getBooksById } from '../../api/catalog';
import type { BookType } from '../../store/book/reduser';

const FavoritePage:React.FC = () => {
  const favoriteState = useAppSelector((store) => store.userState.user);
  const [bookArr, setBookArr] = useState([] as BookType[]);
  useEffect(() => {
    getBooksArray();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookArr]);
  const getBooksArray = async () => {
    try {
      if (favoriteState) {
        const booksId = favoriteState?.favorite.map((book) => (book.id));
        const response = await getBooksById({ bookId: booksId.toString() });
        const booksResponse = response.data;
        setBookArr(booksResponse);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Header />
      <FavoriteContainer>
        {bookArr &&
        bookArr.map((targetBook) => (
        <div key={targetBook.id}>
          <FavoriteBook
            cover={targetBook.cover}
            author={targetBook.author.name}
            title={targetBook.name}
            price={targetBook.price}
           />
           <div className="cart_separator_line" />
        </div>
        ))
      }
        {!bookArr.length && <EmptyFavorite /> }
      </FavoriteContainer>
    </div>
  );
};

export default FavoritePage;
