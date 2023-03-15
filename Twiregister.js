import React, { useState } from 'react'
import './Twiregister.css'
import twitter from './twitter12.jpg';
const Twiregister = () => {
  const [loading,setloading] = useState(false)
  const signup = (event) => {
    event.preventDefault();
    debugger;
  }
  return (
    <div className='container'>
  <div className="row">
    <div className="col-md-3 shadow-lg">
      <img className='img-fluid' alt="cannotshow" src={twitter}/>
    </div>
    <div className="col-md-4 shadow-lg">
    { loading ? <div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div> : ""}
      <h4 className='fw-bold'>Register</h4>
      <form onSubmit={(e)=>signup(e)}>
      <div class="mb-3">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"placeholder='Full Name'/>
  </div>
  <div class="mb-3">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"placeholder='Email'/>
  </div>
  <div class="mb-3">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"placeholder='UserName'/>
  </div>
  <div class="mb-3">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"placeholder='Password'/>
  </div>
  <div className='mb-3'>
    <button type='submit'className='btn btn-primary'>Register</button>
  </div>
  <div className='mb-3'>
    <p>Already registered?<a href="/Otherprofile.js">click here!</a></p>
  </div>
  </form>
    </div>
</div>
</div>
  )
}

export default Twiregister;