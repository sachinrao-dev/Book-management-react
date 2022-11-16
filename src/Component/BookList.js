/* eslint-disable react/prop-types */
/**
 * /* eslint-disable react/prop-types
 *
 * @format
 */

/** @format */

import React from 'react';
import './BookList.css';

function BookList(props) {
  // const { } = props;
  // const [books, setBooks] = useState("sachin");
  // useEffect(() => {
  //   const bookInfo = JSON.parse(localStorage.getItem('bookData'));
  //   // setBooks(bookInfo);

  //   console.log(bookInfo, "Books");
  // }, [books]);
  // eslint-disable-next-line no-unused-vars, react/prop-types
  const { books, deleteBook } = props;
  return (
    <div className="table">
      <div className="bookList">
        <h2>Book list</h2>
      </div>
      <table id="table">
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
                  style={{ color: 'red' }}
                >
                  Delete
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
