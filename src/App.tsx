import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Loading from './components/LoadingPage/LoadingPage';
import RequireAuth from './RequireAuth';
import SignIn from './components/AuthPage/SignInPage';
import Main from './components/MainPage/MainPage';
import ProfilePage from './components/profilePage/ProfilePage';
import SignUp from './components/AuthPage/SignUpPage';
import { useAppDispatch } from './store';
import { getMe } from './api/authentication';
import { userActions } from './store/user/reduser';

const App:React.FC = () => {
  const dispatch = useAppDispatch();
  const [ isAuth, setIsAuth ] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await getMe();
        dispatch(userActions.addUser(response.data.user))    
      } catch (err) {
        console.log(err)
      } finally {
        setIsAuth(true)
      }
    })();
  }, [dispatch])

  if (!isAuth) {
    return (
      <Loading />
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/loading" element={<Loading />} />
        <Route
            path="/profile"
            element={
              <RequireAuth>
                <ProfilePage />
              </RequireAuth>
            }
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
