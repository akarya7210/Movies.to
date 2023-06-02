import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Button() {
    return (
        <button className="btn btn-outline-danger mx-2 mt-3"><NavLink target='_blank' className='text-decoration-none' to="/bookTicket"> Book Tickets</NavLink></button>

    )
}
