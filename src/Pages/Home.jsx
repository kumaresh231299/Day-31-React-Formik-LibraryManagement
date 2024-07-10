import React, { useEffect, useState } from 'react'

function Home({ bookData }) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks(bookData);
    }, [bookData]);


    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-12 col-md-6 col-lg-3'>
                    <div className='d-flex flex-column align-items-center justify-content-center p-3 bg-danger shadow-sm rounded text-white font-monospace ;'>
                        <p className='fs-5'>Total Books</p>
                        <h3 className='fs-2'>404</h3>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-3'>
                    <div className='d-flex flex-column align-items-center justify-content-center p-3 bg-danger shadow-sm rounded text-white font-monospace '>
                        <p className='fs-5'>Available Books</p>
                        <h3 className='fs-2'>{books.length}</h3>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-3'>
                    <div className='d-flex flex-column align-items-center justify-content-center p-3 bg-danger shadow-sm rounded text-white font-monospace '>
                        <p className='fs-5'>Available Authors</p>
                        <h3 className='fs-2'>{books.length}</h3>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-3'>
                    <div className='d-flex flex-column align-items-center justify-content-center p-3 bg-danger shadow-sm rounded text-white font-monospace '>
                        <p className='fs-5'>Total Active users</p>
                        <h3 className='fs-2'>200</h3>
                    </div>
                </div>
            </div>
            {/* Book Details */}
            <div className='bookSession mt-5 container'>
                <h4>Books here...</h4>
                <div className='row'>
                    {books.map((ele, index) => {
                        return (
                            <div key={index} className='card mb-3 col-12 col-md-6 col-lg-3'>
                                <div className='card-body'>
                                    <h5 className='card-title'>{ele.title}</h5>
                                    <p className='card-text'><strong>Author Name: </strong>{ele.authorName}</p>
                                    <p className='card-text'><strong>ISBN Number : </strong>{ele.isbnNumber}</p>
                                    <p className='card-text'><strong>Published Date : </strong>{ele.publishedDate}</p>
                                    <p className='card-text'><strong>Description : </strong><br/> &nbsp;&nbsp;&nbsp;&nbsp;{ele.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* Author Details */}
            <div className='authorSession container'>
                <h4>Author here...</h4>
                <div className='row'>
                    {books.map((ele, index) => {
                        return (
                            <div key={index} className='card mb-3 col-12 col-md-6 col-lg-3'>
                                <div className='card-body'>
                                    <h5 className='card-title'><strong>Author Name: </strong>{ele.authorName}</h5>
                                    <p className='card-text'><strong>Date of Birth : </strong>{ele.dob}</p>
                                    <p className='card-text'><strong>Biography : </strong><br/> &nbsp;&nbsp;&nbsp;&nbsp;{ele.biography}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Home
