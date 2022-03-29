import React from 'react';

import './Contact.css';
import contactBg from '../../images/bg-photos/contact-bg3.jpeg';
import devPhoto from '../../images/dev-photos/dev1.jpeg';

const Contact = () => {
  return (
    <div className='contact-container' style={{background: `url(${contactBg}) center no-repeat`}}>
      <div className='contact-card'>
        <div className='cc-left'>
          <img src={devPhoto} alt='dev' className='cc-image' />
          <div className='dev-details'>
            <p className='dev-info'>
              <span className='info-title'>Name: </span>
              <span className='cc-data'>Skye Brown</span>
            </p>
            <p className='dev-info'>
              <span className='info-title'>Profile: </span>
              <span className='cc-data'>Frontend Engineer</span>
            </p>
            <p className='dev-info'>
              <span className='info-title'>Email: </span>
              <span className='cc-data'>stormi.seuneu@outlook.com</span>
            </p>
            <p className='dev-info'>
              <span className='info-title'>Phone: </span>
              <span className='cc-data'>+1 (469) 992-0704</span>
            </p>
            <div className='cc-resume'>
              <a className='resume-link' href='https://youtu.be/dQw4w9WgXcQ'>Resumé</a>
            </div>
          </div>
        </div>
        <div className='cc-right'>right</div>
      </div>
    </div>
  )
}

export default Contact
