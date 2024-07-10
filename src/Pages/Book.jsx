import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Book({ bookData, setEditBook, deleteBookById }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(bookData);
  }, [bookData]);

  return (
    <div className='container mt-5'>
      <h4>Books Collections...</h4>
      <div className='row'>
        {books.map((ele, index) => {
          return (
            <div key={index} className='card mb-3 col-12 col-md-6 col-lg-3'>
              <div className='card-body'>
                <h5 className='card-title'>{ele.title}</h5>
                <p className='card-text'><strong>Author Name: </strong>{ele.authorName}</p>
                <p className='card-text'><strong>ISBN Number : </strong>{ele.isbnNumber}</p>
                <p className='card-text'><strong>Published Date : </strong>{ele.publishedDate}</p>
                <p className='card-text'>
                  <strong>Description : </strong><br /> &nbsp;&nbsp;&nbsp;&nbsp;{ele.description}</p>
                <div className='d-flex justify-content-between'>
                  <Link to={`/form`}>
                    <button className='btn btn-warning' onClick={() => setEditBook(ele)}>Edit</button>
                  </Link>
                  <button className='btn btn-danger' onClick={() => deleteBookById(ele.id)}>Delete</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Book;
