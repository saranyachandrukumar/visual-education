import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import arrow from './arrow.jpg';
import call from './call.jpg';
import customer from './customer.png';
import classroom from './classroom.png';
import white from './white.png';
import iconyoutube from './iconyoutube.png';
import slide from './slide.png';
import document from './document.png';
import doccam from './doccam.png';
import wsym from './wsym.jpg';
import clibutton from './clibutton.jpg';
import bell from './bell.jpg';
import clock from './clock.jpg';
import correct from './correct.jpg';
import eye from './eye.jpg';
import person from './person.jpg';
import horizontal from './horizontal.jpg';
import IMAGE1 from './IMAGE1.jpg';
import IMAGE2 from './IMAGE2.jpg';
import YOUTUBE from './YOUTUBE.jpg';
import cam from './cam.jpg';
import mic from './mic.jpg';
import share from './share.jpg';
import chat from './chat.jpg';
import leave from './leave.jpg';
import customer1 from './customer1.jpg';
const Navbar = () => {
  const handleClick1 = () => {
    console.log('Button 1 clicked');
  };

  const handleClick2 = () => {
    console.log('Button 2 clicked');
  };

  const handleClick3 = () => {
    console.log('Button 3 clicked');
  };
  const handleClick4 = () => {
    console.log('Button 4 clicked');
  };
  const handleClick5 = () => {
    console.log('Button 5 clicked');
  };
  const handleClick6 = () => {
    console.log('Button 6 clicked');
  };
  const handleClick7 = () => {
    console.log('Button 7 clicked');
  };
  const handleClick8 = () => {
    console.log('Button 7 clicked');
  };


  return (
    <div className="navbar-container">
      <div className="Heading">
        <img src={arrow} className="resume" alt="arrow.jpg" />
        <h1 class="topic">Basic Mathematics 101 </h1>
        <img src={call} className="call" alt="call.jpg" />
        <h2 class="callteacher">Call Teacher</h2>
        <img src={customer} className="customer" alt="customer.jpg" />
        <h2 class="customersupport">Support</h2>

      </div>

      <div className="alltopic">
        <img src={classroom} className="classroom" alt="classroom.png" />
        <Link to="/" className="navbar-link">Classroom</Link>
        <img src={white} className="white" alt="white.png" />
        <Link to="/whiteboard" className="navbar-link">Whiteboard</Link>
        <img src={iconyoutube} className="iconyoutube" alt="iconyoutube.png" />
        <Link to="/videos" className="navbar-linkhigh" >Videos</Link>
        <img src={slide} className="slide" alt="slide.png" />
        <Link to="/slideshow" className="navbar-link">Slideshow</Link>
        <img src={document} className="slide" alt="document.png" />
        <Link to="/documents" className="navbar-link">Documents</Link>
        <img src={doccam} className="doccam" alt="doccam.png" />
        <Link to="/doc-cam" className="navbar-link">Doc.Cam</Link>
      </div>
      <div className='leftmenu'>
        <button onClick={handleClick1}>
          <img src={wsym} className="wsym" alt="wsym.jpg" />
        </button>
        <button onClick={handleClick2}>
          <img src={clibutton} className="clibutton" alt="clibutton.jpg" />
        </button>
        <button onClick={handleClick3}>
          <img src={bell} className="bell" alt="bell.jpg" />
        </button>
        <button onClick={handleClick4}>
          <img src={clock} className="clock" alt="clock.jpg" />
        </button>
        <button onClick={handleClick5}>
          <img src={correct} className="correct" alt="correct.jpg" />
        </button>
        <button onClick={handleClick6}>
          <img src={eye} className="eye" alt="eye.jpg" />
        </button>
        <button onClick={handleClick7}>
          <img src={person} className="person" alt="person.jpg" />
        </button>
        <button onClick={handleClick8}>
          <img src={horizontal} className="horizontal" alt="horizontal.jpg" />
        </button>
        <img src={customer1} className="customer1" alt="customer1.jpg" />

      </div>
      <div classname="main">
        <img src={IMAGE1} className="IMAGE1" alt="IMAGE1.jpg" />
        <img src={IMAGE2} className="IMAGE2" alt="IMAGE2.jpg" />
        <img src={YOUTUBE} className="YOUTUBE" alt="YOUTUBE.jpg" />
        <img src={cam} className="cam" alt="cam.jpg" />
        <img src={mic} className="mic" alt="mic.jpg" />
        <img src={share} className="share" alt="share.jpg" />
        <img src={chat} className="chat" alt="chat.jpg" />
        <img src={leave} className="leave" alt="leave.jpg" />
      </div>
    </div>
  );
}

export default Navbar;

