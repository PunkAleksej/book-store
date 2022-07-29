import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RequireAuth from './AppTest';
import SignIn from './components/AuthPage/SignInPage';
import Main from './components/MainPage/MainPage';
import ProfilePage from './components/profilePage/ProfilePage';
import SignUp from './components/AuthPage/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
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
