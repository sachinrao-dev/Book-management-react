import React, { useRef, useState, Fragment } from 'react';
import './BookForm.css';
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
    const filteredBooks = books.filter((element, index)=>{
      return element.id !== id;
    })
    setBooks(filteredBooks)

  }

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
    <Fragment>
      <form onSubmit={toStoreBookData}>
        <div>
          <label>Book Name : </label>
        <input type='text' ref={enteredBookName}/>
      </div>

      <div>
        <label>Book Detail : </label>
        <input type='text' ref={enteredBookDetail}/>
      </div>
      
      <div>
        <label>Author Name : </label>
        <input type='text' ref={enteredAuthorName}/>
      </div>
      
      <div>
        <label>Publish Date : </label>
        <input type='date' ref={enteredPublishDate}/>
      </div>
      
      <div>
        <label>Price : </label>
        <input type='number' ref={enteredPrice}/>
      </div>
      <button type='submit'>Add Book</button>
    </form> 
    <div>
      <table>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Book Detail</th>
            <th>Author Name</th>
            <th>Publish Date</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        <BookList books={ books } deleteBook = {deleteBook}/>
        </tbody>
      </table>
    </div>
    
    </Fragment>
  );
}

export default BookForm;
