import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { CartContainer } from './CartPage.styles';
import { useAppSelector } from '../../store';
import BookInCart from './elements/BookInCart';
import EmptyCart from './elements/EmptyCart';
import TotalPrice from './elements/TotalPrice';
import { getBooksById } from '../../api/catalog';
import type { BookType } from '../../store/book/reduser';
import Footer from '../Footer/Footer';
import { FlexContainer } from '../BookPage/BookPage.styles';

const CartPage:React.FC = () => {
  const cartState = useAppSelector((store) => store.userState.user);
  const [bookArr, setBookArr] = useState([] as BookType[]);
  const booksId = cartState?.cart.map((cart) => (cart.bookId));
  const user = useAppSelector((store) => store.userState.user);
  useEffect(() => {
    getBooksArray();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  const getBooksArray = async () => {
    try {
      if (booksId) {
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
    <FlexContainer>
      <Header />
      <CartContainer>
        {bookArr &&
        bookArr.map((targetBook) => (
        <div key={targetBook.id}>
          <BookInCart
            bookId={targetBook.id}
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
          : <TotalPrice totalPrice={totalPrice / 100} />}
      </CartContainer>
      <Footer />
    </FlexContainer>
  );
};

export default CartPage;
