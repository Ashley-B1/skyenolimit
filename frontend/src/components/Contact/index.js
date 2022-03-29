import React from 'react';

import './Contact.css';
import contactBg from '../../images/bg-photos/contact-bg3.jpeg';
import devPhoto from '../../images/dev-photos/dev1.jpeg';


import { IoLocationOutline } from 'react-icons/io5';
import { BsPhone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

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
        <div className='cc-right'>
          <div className='contact-note'>
            <h2 className='cn-title'>
              Keep In Touch!
            </h2>
            <p className='cn-note'>
              Dragée chupa chups lollipop chocolate cake liquorice. Dragée gummies gummies tart cookie chocolate. Liquorice chocolate bar tootsie roll croissant sweet roll candy canes. Macaroon muffin caramels jelly-o liquorice oat cake bear claw sweet jelly beans. Cake sweet roll tootsie roll fruitcake halvah tootsie roll croissant soufflé.
            </p>
            <div className='cn-info'>
              <p className='cn-details'>
                <IoLocationOutline className='cn-icon' />
                <span className='cn-data'>Dallas, TX </span>
                <span className='relocate'>(Willing to relocate to Georgia, Oklahoma, or Arkansas)
                </span>
              </p>
              <p className='cn-details'>
                <BsPhone className='cn-icon' />
                <span className='cn-data'>+1 (469) 992-0704</span>
              </p>
              <p className='cn-details'>
                <FiMail className='cn-icon' />
                <span className='cn-data'>stormi.seuneu@outlook.com</span>
              </p>
              <div className='social-media'>
                <FaLinkedinIn className='sm-icon' />
                <FaGithub className='sm-icon' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
