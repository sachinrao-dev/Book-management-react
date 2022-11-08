import React, { Fragment } from "react";

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
            </table>
        </Fragment>
)
}

export default BookList;