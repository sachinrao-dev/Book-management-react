/** @format */

import React, { useRef, useState } from 'react';
import './BookForm.css';
import Header from './Header';
import BookList from './BookList';

function BookForm() {
  const [books, setBooks] = useState([]);
  const enteredBookName = useRef();
  const enteredBookDetail = useRef();
  const enteredAuthorName = useRef();
  const enteredPublishDate = useRef();
  const enteredPrice = useRef();

  // to delete book list
  const deleteBook = (id) => {
    const filteredBooks = books.filter((element) => element.id !== id);
    setBooks(filteredBooks);
  };

  const toStoreBookData = (event) => {
    event.preventDefault();
    const bookInfo = {
      id: Math.floor(Math.random() * 100),
      bookName: enteredBookName.current.value,
      bookDetail: enteredBookDetail.current.value,
      authorName: enteredAuthorName.current.value,
      publishData: enteredPublishDate.current.value,
      price: enteredPrice.current.value,
    };
    setBooks([...books, bookInfo]);
    enteredBookName.current.value = '';
    enteredBookDetail.current.value = '';
    enteredAuthorName.current.value = '';
    enteredPublishDate.current.value = '';
    enteredPrice.current.value = '';
    let bookData;
    if (localStorage.getItem('bookData')) {
      bookData = JSON.parse(localStorage.getItem('bookData') || '[]');
    } else {
      bookData = [];
    }
    bookData.push(bookInfo);
    localStorage.setItem('bookData', JSON.stringify(bookData));
  };

  return (
    <div className="container">
      <div className="form">
        <Header />

        <form onSubmit={toStoreBookData}>
          <div className="labelInput">
            <label className="label">Book Name : </label>
            <input type="text" ref={enteredBookName} />
          </div>

          <div className="labelInput">
            <label className="label">Book Detail : </label>
            <input type="text" ref={enteredBookDetail} />
          </div>

          <div className="labelInput">
            <label className="label">Author Name : </label>
            <input type="text" ref={enteredAuthorName} />
          </div>

          <div className="labelInput">
            <label className="label">Publish Date : </label>
            <input type="date" ref={enteredPublishDate} />
          </div>

          <div className="labelInput">
            <label className="label">Price : </label>
            <input type="number" ref={enteredPrice} />
          </div>
          <button type="submit" className="button">
            Add Book
          </button>
        </form>
      </div>
      <BookList books={books} deleteBook={deleteBook} />
    </div>
  );
}

export default BookForm;
