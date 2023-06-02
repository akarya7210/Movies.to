import React, { useState } from 'react'

export default function Form() {
    const [info, newInfo] = useState({
        fname: "",
        lname: "",
        email: "",
        city: "",
        movie: ""
    })
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        newInfo({ ...info, [name]: value })
    }
    function onsubmit() {
        localStorage.setItem("fname", info.fname),
            localStorage.setItem("lname", info.lname),
            localStorage.setItem("email", info.email),
            localStorage.setItem("city", info.city),
            localStorage.setItem("movie", info.movie)
    }

    return (
        <div style={{ background: "#2b2b2b", height: "100vh", color: "#fff", padding: "2rem 4rem" }}>
            <form className="row g-3 needs-validation">
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" name='fname' value={info.fname} onChange={handleChange} required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" onChange={handleChange} name='lname' value={info.lname} required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustomUsername" className="form-label">Email-address</label>
                    <div className="input-group has-validation">
                        <input type="text" className="form-control" id="validationCustomUsername" name='email' value={info.email} onChange={handleChange} aria-describedby="inputGroupPrepend" required />
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">City</label>
                    <input type="text" className="form-control" value={info.city} name='city' onChange={handleChange} id="validationCustom03" required />
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom05" className="form-label">Movie</label>
                    <input type="text" className="form-control" value={info.movie} name='movie' onChange={handleChange} id="validationCustom05" required />
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit" onClick={onsubmit}>Submit form</button>
                </div>
            </form>
        </div>
    )
}
