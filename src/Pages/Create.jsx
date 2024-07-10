import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

function Create({ addBook, updateBook, editBook ,setEditBook}) {
    const navigate = useNavigate();
    const initialValues = {
        title: '',
        description: '',
        authorName: '',
        isbnNumber: '',
        publishedDate: '',
        dob: '',
        biography: ''
    }
    const [formValues, setFormValues] = useState(initialValues);

    useEffect(() => {
        if (editBook) {
            setFormValues(editBook);
        } else {
            setFormValues(initialValues);
        }
    }, [editBook])

    //Formik Validations fro input fields
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Title should not be empty'),
        description: Yup.string().required('Description should not be empty'),
        authorName: Yup.string().required('AuthorName should not be empty'),
        isbnNumber: Yup.string().required('ISBN Number should not be empty'),
        publishedDate: Yup.string().required('PublishedDate should not be empty'),
        dob: Yup.string().required('Date of Birth should not be empty'),
        biography: Yup.string().required('Short Biography should not be empty')
    });

    const handleSubmit = (values, { resetForm }) => {
        if (editBook) {
            updateBook(editBook.id, values);

        } else {
            addBook(values);
        }
        resetForm();
        setEditBook(null);
        navigate(`/authors`)
        
    }

    return (
        <div className='container'>
            <div className='heroSession'>
                <Formik
                    initialValues={formValues}
                    enableReinitialize
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div className='book-card card mt-5'>
                            <div className='card-header d-flex justify-content-between align-items-center'>
                                <h3 className='headingTitle fw-bolder'>
                                    {/* edit page or create pagee */}
                                    {editBook ? 'Edit Book And Author' : "Create a Book and Author Details"}
                                </h3>
                                <button type="submit" className='m-3 btn btn-success fw-bold'>
                                    {editBook ? 'Update' : "Submit"}
                                </button>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"><u>Book Details</u></h5>
                                <div className="row container">
                                    <div className='col-md-4 mb-3'>
                                        <label>Title</label>
                                        <Field type="text" name="title" className="form-control" />
                                        <ErrorMessage className='error1' component='h6' name='title' />
                                    </div>
                                    <div className='col-md-5 mb-3'>
                                        <label>ISBN number</label>
                                        <Field type="text" name="isbnNumber" className="form-control" />
                                        <ErrorMessage className='error1' component='h6' name='isbnNumber' />
                                    </div>
                                    <div className='col-md-3 mb-3'>
                                        <label>Published Date</label>
                                        <Field type="date" name="publishedDate" className="form-control" />
                                        <ErrorMessage className='error1' component='h6' name='publishedDate' />
                                    </div>
                                </div>
                                <div className="row container">
                                    <div className='col-md-12 mb-3'>
                                        <label>Description</label>
                                        <Field as="textarea" name="description" className="form-control" />
                                        <ErrorMessage className='error1' component='h6' name='description' />
                                    </div>
                                </div>
                                <h5 className="card-title"><u>Author Details</u></h5>
                                <div className="row container">
                                    <div className='col-md-6 mb-3'>
                                        <label>Author name</label>
                                        <Field type="text" name="authorName" className="form-control" />
                                        <ErrorMessage className='error1' component='h6' name='authorName' />
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <label>Date of Birth</label>
                                        <Field type="date" name="dob" className="form-control" />
                                        <ErrorMessage className='error1' component='h6' name='dob' />
                                    </div>
                                </div>
                                <div className="row container">
                                    <div className='col-md-12 mb-3'>
                                        <label>Short Biography</label>
                                        <Field as="textarea" name="biography" className="form-control" />
                                        <ErrorMessage className='error1' component='h6' name='biography' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Create;
