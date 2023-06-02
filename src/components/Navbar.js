import React, { memo } from 'react'
import { Link } from 'react-router-dom'

export default memo(function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fw-medium" style={{ background: "linear-gradient(173deg, rgba(102,50,186,1) 0%, rgba(89,75,190,1) 22%, rgba(9,226,216,1) 100%)"}}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand text-white navButton hover">Movies.to</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active text-white navButton " aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-white navButton">{props.About}</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-dark" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
})
