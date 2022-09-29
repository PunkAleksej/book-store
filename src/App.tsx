import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loading from './components/loadingPage/LoadingPage';
import RequireAuth from './RequireAuth';
import SignIn from './components/authPage/SignInPage';
import Main from './components/mainPage/MainPage';
import ProfilePage from './components/profilePage/ProfilePage';
import SignUp from './components/authPage/SignUpPage';
import { useAppDispatch } from './store';
import { userActions } from './store/user/reduser';
import { getMe } from './api/authentication';
import BookPage from './components/bookPage/BookPage';
import CartPage from './components/cartPage/CartPage';
import FavoritePage from './components/favoritePage/FavoritePage';
import StyledApp from './App.styles';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App:React.FC = () => {
  const dispatch = useAppDispatch();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const authResponse = await getMe();
        dispatch(userActions.addUser(authResponse.data.user));
      } catch (err) {
        // toastsWriter({ text: err.message, style: 'error' });
      } finally {
        setIsAuth(true);
      }
    })();
  }, [dispatch]);

  if (!isAuth) {
    return (
      <Loading />
    );
  }

  return (
      <StyledApp>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/book/:id" element={<BookPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/favorite" element={<FavoritePage />} />
            <Route
                path="/profile"
                element={
                  (<RequireAuth>
                    <ProfilePage />
                  </RequireAuth>)
                }
              />
          </Routes>
          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </StyledApp>
  );
};

export default App;
