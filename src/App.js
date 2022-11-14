import BookForm from './Component/BookForm'
import Header from './Component/Header';
import React from 'react';

function App() {
  return (
        <div className='headerForm'>
          <div className='header'>
        <Header />
        </div>
        <BookForm />
        </div>
  );
}

export default App;
