import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Otherprofile.css'
const Otherprofile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [file, setfile] = useState(false);
  const handleclose = () => setfile(false);
  const handlefile = () => setfile(true);
  const notify = () => toast("successfully Tweeted!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",

  });
  return (
    <div className='Otherprofile'>
      <div classNameName='Twihome'>
        <div className="sidebar bg-primary">
          <a href="/" className="icon"><i className="fa-solid fa-message one"></i></a>
          <a href="#home"><i className="fa-solid fa-house me-3"></i>Home</a>
          <a href="/"><i className="fa-solid fa-user me-3"></i>profile</a>
          <a href="#Logout"><i className="fa-solid fa-right-from-bracket me-3"></i>Logout</a>
          <a href="#about"><i className="fa-solid fa-address-card me-3"></i>About</a>
          <div className="account">
            <span className="user">
              <i className="fa-solid fa-user mx-3"></i>
              jhon doe
              <p className="mx-5">@gmail.com</p>
            </span>
          </div>
        </div>
      </div>
      <div className='content'>
        <div className='row'>
          <div className='col-md-12'>
            <p classNameName="fs-3 fw-bold">Profile</p>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <div className='card area'>
              <div className="box">
                <img className="mx-2 alter" alt="cannotshow" src="https://c4.wallpaperflare.com/wallpaper/297/423/689/soccer-neymar-brazilian-wallpaper-preview.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex float-end mt-3 me-3'>
          <button type='submit' className='btn btn-primary mx-1' onClick={handlefile}>Upload profile photo</button>
          <button type='submit' className='btn btn-primary' onClick={handleShow}>Edit</button>
        </div>
        <div className='inform mx-3'>
          <p className='fs-4 fw-bold'>Neymar jr</p>
          <p className='fw-bold'>@neymar</p>
        </div>
        <div className='row mx-2'>
          <div className='col-md-6'>
            <p>Date,wed Feb 2003</p>
            <p>Joined,Thu Jan 2002</p>
            <p>Location,India</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 d-flex mx-2'>
            <p className='fs-5 fw-bold mx-3'>1 Following</p>
            <p className='fs-5 fw-bold'>6 Followers</p>
          </div>
        </div>
        <h4 className='text-center'>Tweets and Replies</h4>
        <hr />

        <div className="logo d-flex">
          <img className="mx-2" alt="cannotshow" src="https://c4.wallpaperflare.com/wallpaper/297/423/689/soccer-neymar-brazilian-wallpaper-preview.jpg" />
          <p className="fs-6 fw-bold d-flex"><a href="/">@neymar-</a><p>Thu Jan 23 2023</p></p>
        </div>
        <p className="px-5 fw-bold">How are you my dear friend?</p>
        <div className="row">
          <div className="col-md-12 d-flex px-5">
            <span><i className="fa-regular fa-heart mx-3"></i></span>
            <p><i className="fa-regular fa-comments mx-3"></i></p>
            <p><i className="fa-solid fa-reply-all mx-3"></i></p>
          </div>
        </div>
        <hr />

        <div className="logo d-flex">
          <img className="mx-2" alt="cannotshow" src="https://c4.wallpaperflare.com/wallpaper/297/423/689/soccer-neymar-brazilian-wallpaper-preview.jpg" />
          <p className="fs-6 fw-bold d-flex"><a href="/">@neymar-</a><p>Thu Jan 23 2023</p></p>
        </div>
        <p className="px-5 fw-bold">Nice to talk to you....</p>
        <div className="row">
          <div className="col-md-12 d-flex px-5">
            <span><i className="fa-regular fa-heart mx-3"></i></span>
            <p><i className="fa-regular fa-comments mx-3"></i></p>
            <p><i className="fa-solid fa-reply-all mx-3"></i></p>
          </div>
        </div>
        <hr />

        <div className="logo d-flex">
          <img className="mx-2" alt="cannotshow" src="https://c4.wallpaperflare.com/wallpaper/297/423/689/soccer-neymar-brazilian-wallpaper-preview.jpg" />
          <p className="fs-6 fw-bold d-flex"><a href="/">@neymar-</a><p>Thu Jan 23 2023</p></p>
        </div>
        <p className="px-5 fw-bold">welcome to the home.</p>
        <div className="row">
          <div className="col-md-12 d-flex px-5">
            <span><i className="fa-regular fa-heart mx-3"></i></span>
            <p><i className="fa-regular fa-comments mx-3"></i></p>
            <p><i className="fa-solid fa-reply-all mx-3"></i></p>
          </div>
        </div>
        <hr />

        <div className="logo d-flex">
          <img className="mx-2" alt="cannotshow" src="https://c4.wallpaperflare.com/wallpaper/297/423/689/soccer-neymar-brazilian-wallpaper-preview.jpg" />
          <p className="fs-6 fw-bold d-flex"><a href="/">@neymar-</a><p>Thu Jan 23 2023</p></p>
        </div>
        <p className="px-5 fw-bold">hello to the party!</p>
        <div className="row">
          <div className="col-md-12 d-flex px-5">
            <span><i className="fa-regular fa-heart mx-3"></i></span>
            <p><i className="fa-regular fa-comments mx-3"></i></p>
            <p><i className="fa-solid fa-reply-all mx-3"></i></p>
          </div>
        </div>
        <hr />
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
            <hr />
          </Modal.Header>
          <Modal.Body>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Devendra Reddy' />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Location</label>
                <input type="location" class="form-control" id="exampleInputPassword1" placeholder='India,Mumbai' />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Date of birth</label>
                <input type="date" class="form-control" id="exampleInputPassword1" />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={notify}>
              Save Changes
            </Button>
            <ToastContainer>
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            </ToastContainer>
          </Modal.Footer>
        </Modal>


        <Modal show={file} onHide={handleclose}>
          <Modal.Header closeButton>
            <Modal.Title>Upload Profile Pic</Modal.Title>
            <hr />
          </Modal.Header>
          <Modal.Body>
            <div class="alert alert-primary" role="alert">
              Note:The image should be square in shape.
            </div>
            <div class="mb-3">
                <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='choosefile' />
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleclose}>
              Close
            </Button>
            <Button variant="primary" onClick={notify}>
              Save Changes
            </Button>

            <ToastContainer>
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            </ToastContainer>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default Otherprofile;