import BookForm from './Component/BookForm'
import Header from './Component/Header';
import BookList from './Component/BookList';
import React from 'react';
import './App.css'

function App() {
  return (
    <div className='mainSection'>
        <div className='headerForm'>
        <Header />
        <BookForm />
        </div>
    </div>
  );
}

export default App;
