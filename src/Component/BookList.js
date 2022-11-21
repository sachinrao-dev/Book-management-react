/* eslint-disable react/prop-types */

import React from 'react';
import './BookList.css';

function BookList(props) {
  const { books, deleteBook } = props;
  return (
    <div className="table">
      <div className="bookList">
        <h2>Book list</h2>
      </div>
      <table id="table">
        {books.length > 0 && (
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
        )}
        <tbody>
          {books.map((book) => (
            <tr key={book?.id}>
              <td>{book?.bookName}</td>
              <td>{book?.authorName}</td>
              <td>{book?.bookDetail}</td>
              <td>{book?.publishData}</td>
              <td>{book?.price}</td>
              <td>
                <button
                  onClick={() => {
                    deleteBook(book.id);
                  }}
                  type="button"
                  // style={{ color: 'red' }}
                >
                  <i className="fa-sharp fa-solid fa-trash" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
