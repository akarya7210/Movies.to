import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

// import Button from './Button';

export default function Shows(props) {
  const [post, getPost] = useState([])
  const Api = "https://api.tvmaze.com/search/shows?q=all";
  const fetchPost = () => {
    fetch(Api).then((res) => res.json()).then((res) => {
      getPost(res)
    })
  }

  useEffect(() => {
    fetchPost();
  }, [])
  const onload = (e) => {
    getPost(false);
    // console.log(e.target.value)
  }
  return (
    <div className='d-flex justify-content-center' style={{ background: "#2b2b2b" }}>
      <div className='row container d-flex justify-content-around'>
        {post && post.map((item, i) => {
          return <div className="card col-md-3 mx-1 my-3" key={i} style={{ width: "20rem" }}>
            <img src={!item.show.image ? 'https://static.tvmaze.com/uploads/images/original_untouched/24/60454.jpg' : item.show.image.original} className="card-img-top" alt="..." />
            <div className="card-body">
              <h2 className="card-title">{item.show.name}</h2>
              <Link to="/summary"><div className="btn btn-primary my-3" onClick={onload}>More Details</div></Link>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}