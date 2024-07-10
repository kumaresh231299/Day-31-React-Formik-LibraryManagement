import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
// import Book from "./Pages/Book";
import Author from "./Pages/Author";
import axios from "axios";

const Layout = () => {
    const [bookData, setBookData] = useState([]);
    const [editBook, setEditBook] = useState(null);

    //Getting book details from MockApi
    const fetchBooks = async () => {
        const response = await axios.get("https://6685be94b3f57b06dd4daaf1.mockapi.io/book");
        setBookData(response.data);
    };

    //create book details in MockApi
    const addBook = async (book) => {
        await axios.post("https://6685be94b3f57b06dd4daaf1.mockapi.io/book", book);
        fetchBooks();
    };

    //Update book details from MockApi
    const updateBook = async (id, updatedBook) => {
        await axios.put(`https://6685be94b3f57b06dd4daaf1.mockapi.io/book/${id}`, updatedBook);
        fetchBooks();
    };

    //delete book details in MockApi
    const deleteBookById = async (id) => {
        await axios.delete(`https://6685be94b3f57b06dd4daaf1.mockapi.io/book/${id}`);
        fetchBooks();
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div className="d-flex flex-column">
            <Navbar />
            <div className="d-flex flex-grow-1">
                <Sidebar />
                <div className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Home bookData={bookData} />} />
                        <Route
                            path="/form"
                            element={
                                <Create
                                    addBook={addBook}
                                    updateBook={updateBook}
                                    editBook={editBook}
                                    setEditBook={setEditBook}
                                />
                            }
                        />
                        {/* <Route
                            path="/form"
                            element={
                                <Book
                                    bookData={bookData}
                                    setEditBook={setEditBook}
                                    deleteBookById={deleteBookById}
                                />
                            }
                        /> */}
                        <Route
                            path="/authors"
                            element={
                                <Author
                                    bookData={bookData}
                                    setEditBook={setEditBook}
                                    deleteBookById={deleteBookById}
                                />
                            }
                        />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Layout;
