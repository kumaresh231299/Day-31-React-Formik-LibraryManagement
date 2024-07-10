import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar-fixed Head'>
            <nav className='fw-bold shadow' >
                <div className='p-4 fs-1 d-flex justify-content-between align-items-center '>
                    <div className='d-flex align-items-center'>
                        {/* <i className="fa-sharp fa-solid fa-strikethrough my-2" style={{ color: "#ffffff" }}></i> */}
                        {/* <i className="fa-solid fa-kip-sign my-2" style={{ color: "#ffffff" }}></i>  */}
                        <i className="fa-sharp fa-solid fa-strikethrough my-2"></i>
                        <i className="fa-solid fa-kip-sign my-2"></i>&nbsp;&nbsp;
                        <span className='brand-name titleName'>Library Management</span>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar
