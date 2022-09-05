import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { CartContainer } from './CartPage.styles';
import { useAppSelector } from '../../store';
import BookInCart from './elements/BookInCart';
import EmptyCart from './elements/EmptyCart';
import TotalPrice from './elements/TotalPrice';
import { getBooksById } from '../../api/catalog';
import type { BookType } from '../../store/book/reduser';

const CartPage:React.FC = () => {
  const cartState = useAppSelector((store) => store.userState.user);
  const [bookArr, setBookArr] = useState([] as BookType[]);
  useEffect(() => {
    getBooksArray();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookArr]);
  const getBooksArray = async () => {
    try {
      if (cartState) {
        const booksId = cartState?.cart.map((book) => (book.id));
        const response = await getBooksById({ bookId: booksId.toString() });
        const booksResponse = response.data;
        setBookArr(booksResponse);
      }
    } catch (err) {
      console.log(err);
    }
  };
  // getBooksArray();
  // const bookArr = useAppSelector((store) => store.bookState.books);
  const totalPrice = bookArr.map((book) => (
    +book.price
  )).reduce((acc, number) => acc + number, 0);
  return (
    <div>
      <Header />
      <CartContainer>
        {bookArr &&
        bookArr.map((targetBook) => (
        <div key={targetBook.id}>
          <BookInCart
            cover={targetBook.cover}
            author={targetBook.author.name}
            title={targetBook.name}
            price={targetBook.price}
           />
           <div className="cart_separator_line" />
        </div>
        ))
      }
        {!bookArr.length
          ? <EmptyCart />
          : <TotalPrice totalPrice={totalPrice} />}
      </CartContainer>
    </div>
  );
};

export default CartPage;
