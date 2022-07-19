import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/mainPage/mainHeader';
import Footer from './components/mainPage/mainFooter';
import Catalog from './components/mainPage/mainCatalog';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Catalog></Catalog>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
