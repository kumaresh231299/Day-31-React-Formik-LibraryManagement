import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar-fixed bg-dark-subtle fw-bolder vh-100'>
            <div className='list-group list-group-flushm p-3 '>
                <Link to="/" className='list-group-item  my-2'>
                    <span className='fs-5'><i className="fa-solid fa-house"></i>&nbsp;Dashboard</span>
                </Link>
                <Link to='/form' className='list-group-item  my-2'>
                    <span className='fs-5'><i className="fa-solid fa-book"></i>&nbsp; Create Book</span>
                </Link>
                <Link to='/authors' className='list-group-item  my-2'>
                    <span className='fs-5'><i className="fa-solid fa-user"></i>&nbsp;Manage Book</span>
                </Link>
            </div>
        </div>
    );

};

export default Sidebar;