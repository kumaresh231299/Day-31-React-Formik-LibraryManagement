import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Author({ bookData, setEditBook, deleteBookById }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(bookData);
  }, [bookData]);

  return (
    <div className='container mt-5'>
      <h4>Author Details...</h4>

      <table className=" table" border={3}>
        <thead>
          <tr align="center">
            <th>Title</th>
            <th>ISBN No</th>
            <th>Published Date</th>
            <th>Description</th>
            <th>Author</th>
            <th>DOB</th>
            <th>Biography </th>
            <th>Action </th>
          </tr>
        </thead>
        <tbody className="table-group-divider" align="center">

          {books.map((ele, index) => {
            return (
              <tr key={index}>
                <td>{ele.title}</td>
                <td>{ele.isbnNumber}</td>
                <td>{ele.publishedDate}</td>
                <td>{ele.description}</td>
                <td>{ele.authorName}</td>
                <td>{ele.dob}</td>
                <td>{ele.biography}</td>
                <td>
                  <Link to={`/form`}>
                    <button className='btn btn-warning' onClick={() => setEditBook(ele)}>Edit</button>
                  </Link>&nbsp;
                  <button className='btn btn-danger' onClick={() => deleteBookById(ele.id)}>Delete</button>
                </td>
              </tr>

            )
          })}

        </tbody>
      </table>

    </div>
  )
}

export default Author
