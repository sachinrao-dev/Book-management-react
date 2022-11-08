import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import React, {useRef} from 'react';
import './BookForm.css'

const BookForm = () => {
  const enteredBookName = useRef();
  const enteredBookDetail = useRef();
  const enteredAuthorName = useRef();
  const enteredPublishDate = useRef();
  const enteredPrice = useRef();


  const ToStoreBookData = () =>{
    const BookData = {
      id: Math.floor(Math.random() * 100),
      BookName: enteredBookName.current.value,
      BookDetail: enteredBookDetail.current.value,
      AuthorName: enteredAuthorName.current.value,
      PublishDate: enteredPublishDate.current.value,
      Price: enteredPrice.current.value
    }
    enteredBookName.current.value = '';
    enteredBookDetail.current.value = '';    
    enteredAuthorName.current.value = '';
    enteredPublishDate.current.value = '';
    enteredPrice.current.value = '';
    console.log(BookData);  

    let bookData;
    if (localStorage.getItem("bookData") ){
      bookData = JSON.parse(localStorage.getItem("bookData") || '[]')
    }
    else{
      bookData = [];
    }
    bookData.push(BookData);
    localStorage.setItem("bookData", JSON.stringify(bookData));

  }
  return (
    <div className='bookForm'>
      <div className='labelInput'>
      <label className='lbl'>Book Name :</label>
      <input type='text' className='InputField' ref={enteredBookName}/>
      </div>

      <div className='labelInput'>
      <label className='lbl'>Book Detail :</label>
      <input type='text' className='InputField' ref={enteredBookDetail}/>
      </div>

      <div className='labelInput'>
      <label className='lbl'>Author Name :</label>
      <input type='text' className='InputField' ref={enteredAuthorName}/>
      </div>

      <div className='labelInput'>
      <label className='lbl'>Publish Date :</label>
      <input type='date' className='InputField' ref={enteredPublishDate}/>
      </div>

      <div className='labelInput'>
      <label className='lbl'>Price :</label>
      <input type='number' className='InputField' min='0.1' ref={enteredPrice}/>
      </div>
      <input type='button' value='Create Event' onClick={ToStoreBookData}/>
      </div>
  );
}
export default BookForm;
