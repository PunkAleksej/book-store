import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './components/AuthPage/AuthPage';
import Main from './components/MainPage/MainPage';
import Profile from './components/profilePage.tsx/Profile';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
