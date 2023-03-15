import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Twitterhome.css'
const Twihome = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const notify = () => toast("successfully uploaded!",{
    
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

      <div className="content">
        <div className="row">
          <div className="col-md-6 fs-5 fw-bold mt-3">Home</div>
          <div className="col-md-6"><button type="submit" className="btn btn-primary mt-3 float-end px-2"onClick={handleShow}>Tweet</button></div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card mt-3 ">
              <p className="mt-2 px-5">Hi Retweeted by Neymar</p>
              <div className="logo d-flex">
                <img alt="cannotshow" className="mx-2"src="https://c4.wallpaperflare.com/wallpaper/297/423/689/soccer-neymar-brazilian-wallpaper-preview.jpg" />
                <p className="fs-6 fw-bold d-flex"><a href="Otherprofile.js">Neymar-</a><p>Sat Jan 26 2023</p></p>
              </div>
              <p className="px-5">This is the description of the image of the content in the twitter of the object in the paragraph of the image is liking the nature of the image on
                rain system and i am trying to text something of my own in the description there is nothing more than that in this content.
                rain system and i am trying to text something of my own in the description there is nothing more than that in this content.
                rain system and i am trying to text something of my own in the description there is nothing more than that in this content.
                rain system and i am trying to text something of my own in the description there is nothing more than that in this content.
              </p>
              <img className="px-5 post" alt="cannotshow" src="https://www.sportphotogallery.com/content/images/cmsfiles/product/38951/39756-list.jpg" />
              <div className="row">
                <div className="col-md-12 d-flex px-5 mt-2">
                  <span><i className="fa-regular fa-heart mx-3"></i></span>
                  <p><i className="fa-regular fa-comments mx-3"></i></p>
                  <p><i className="fa-solid fa-reply-all mx-3"></i></p>
                </div>
              </div>
              <hr />
              <p className="px-5">Retweeted by ronaldo</p>
              <div className="logo d-flex">
                <img className="mx-2" alt="cannotshow" src="https://b.fssta.com/uploads/application/soccer/headshots/885.vresize.350.350.medium.14.png" />
                <p className="fs-6 fw-bold d-flex"><a href="/">Cristiano-</a><p>Thu Jan 23 2023</p></p>
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
              <p className="px-5">Retweeted by Messi</p>
              <div className="logo d-flex">
                <img className="mx-2" alt="cannotshow" src="https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg" />
                <p className="fs-6 fw-bold d-flex"><a href="/">Lionel Messi-</a><p>Thu Jan 23 2023</p></p>
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
              <p className="px-5">Retweeted by brazilian</p>
              <div className="logo d-flex">
                <img className="mx-2" alt="cannotshow" src="https://img.a.transfermarkt.technology/portrait/big/68290-1669394812.jpg?lm=1" />
                <p className="fs-6 fw-bold d-flex"><a href="/">Neymar jr-</a><p>Thu Jan 23 2023</p></p>
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
              <p className="px-5">Retweeted by Mbappe</p>
              <div className="logo d-flex">
                <img className="mx-2" alt="cannotshow" src="https://icdn.football-espana.net/wp-content/uploads/2022/10/kylian-mbappe-psg-exit-e1665524557343-770x633.jpg" />
                <p className="fs-6 fw-bold d-flex"><a href="/">Kyliean Mbappe-</a><p>Thu Jan 23 2023</p></p>
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
            </div>
          </div>
        </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Tweet</Modal.Title>
          <hr/>
        </Modal.Header>
        <Modal.Body>Three GOATS in one frame.</Modal.Body>      
        <Modal.Footer>
        <img className="px-5 post" alt="cannotshow" src="https://www.sportphotogallery.com/content/images/cmsfiles/product/38951/39756-list.jpg" />
             
          <Button variant="secondary"  onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={notify}>
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


  );

}
export default Twihome;