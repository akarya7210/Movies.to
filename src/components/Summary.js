import React from 'react'
import { Link } from 'react-router-dom';

export default function Summary(props) {
    return (
        <>
        <div className='container-sm'>{props.text}
        </div>
        <Link to="/booktickets"><button className="btn btn-primary mx-5 my-3">Book Tickets</button></Link>
        </>

    )
}