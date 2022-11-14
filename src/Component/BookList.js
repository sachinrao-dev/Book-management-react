import React from "react";

const BookList = (props) =>{
    const { books, deleteBook } = props;
return(
    books.map(book => (
        <tr key={book?.id}>
            <td>{book?.bookName}</td>
            <td>{book?.authorName}</td>
            <td>{book?.bookDetail}</td>
            <td>{book?.publishData}</td>
            <td>{book?.price}</td>
            <td onClick={()=>{deleteBook(book.id)}}><button>Delete</button></td>
        </tr>
    ))
)
};
export default BookList;