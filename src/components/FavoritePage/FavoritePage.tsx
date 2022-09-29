import React, { useEffect, useState } from 'react';
import { FavoriteContainer } from './FavoritePage.styles';
import { useAppSelector } from '../../store';
import FavoriteBook from './Elements/FavoriteBook';
import EmptyFavorite from './Elements/EmptyFavorite';
import { getBooksById } from '../../api/catalog';
import type { BookType } from '../../store/book/reduser';


const FavoritePage:React.FC = () => {
  const favoriteState = useAppSelector((store) => store.userState.user);
  const [bookArr, setBookArr] = useState([] as BookType[]);
  const user = useAppSelector((store) => store.userState.user);
  useEffect(() => {
    getBooksArray();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  const getBooksArray = async () => {
    try {
      if (favoriteState) {
        const booksId = favoriteState?.favorite.map((favorite) => (favorite.bookId));
        const response = await getBooksById({ bookId: booksId.toString() });
        const booksResponse = response.data;
        setBookArr(booksResponse);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FavoriteContainer>
      {bookArr &&
      bookArr.map((targetBook) => (
      <div key={targetBook.id}>
        <FavoriteBook
          cover={targetBook.cover}
          author={targetBook.author}
          title={targetBook.name}
          price={targetBook.price}
          bookId={targetBook.id}
          />
          <div className="cart_separator_line" />
      </div>
      ))
    }
      {!bookArr.length && <EmptyFavorite /> }
    </FavoriteContainer>
  );
};

export default FavoritePage;
