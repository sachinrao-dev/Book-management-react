import React, { Fragment } from "react";
import './BookList.css';

const BookList = () =>{
    const BookList = JSON.parse(localStorage.getItem("bookData"));
    console.log(BookList);
    return(

        <Fragment>
            <table>
            <th>Book Name</th>
            <th>Book Detail</th>
            <th>Author Name</th>
            <th>Publish Date</th>
            <th>Price</th>
    
                {BookList?.map((item) => {
                    return (
                        <tr>
                            <td>{item.BookName }</td>
                            <td>{item.BookDetail }</td>
                            <td>{item.AuthorName }</td>
                            <td>{item.PublishDate }</td>
                            <td>{item.Price }</td>
                        </tr>
                    )

                })}
            </table>
        </Fragment>
)
}

export default BookList;