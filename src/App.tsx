import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loading from './components/LoadingPage/LoadingPage';
import RequireAuth from './RequireAuth';
import SignIn from './components/AuthPage/SignInPage';
import Main from './components/MainPage/MainPage';
import ProfilePage from './components/profilePage/ProfilePage';
import SignUp from './components/AuthPage/SignUpPage';
import { useAppDispatch } from './store';
import { userActions } from './store/user/reduser';
import { getMe } from './api/authentication';
import BookPage from './components/BookPage/BookPage';
import CartPage from './components/CartPage/CartPage';
import FavoritePage from './components/FavoritePage/FavoritePage';
import StyledApp from './App.styles';

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
        <ToastContainer />
      </BrowserRouter>
      </StyledApp>
  );
};

export default App;
