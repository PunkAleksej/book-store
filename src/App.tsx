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
import { getMe } from './api/authentication';
import { userActions } from './store/user/reduser';
import FilterByGenre from './components/Elements/DropMenu/DropMenu';
import { getGenres } from './api/catalog';
import { booksActions } from './store/book/reduser';

const App:React.FC = () => {
  const dispatch = useAppDispatch();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const responseGenre = await getGenres();
        dispatch(booksActions.loadGenres(responseGenre.data.genres));
        const response = await getMe();
        dispatch(userActions.addUser(response.data.user));
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/test" element={<FilterByGenre />} />
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
  );
};

export default App;
