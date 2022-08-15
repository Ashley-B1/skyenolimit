import React from 'react';

import './Contact.css';
import contactBg from '../../images/bg-photos/contact-bg3.jpeg';
import devPhoto from '../../images/dev-photos/dev1.jpeg';


import { IoLocationOutline } from 'react-icons/io5';
import { BsPhone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const Contact = () => {
  const contactNum = '+1 (469)-501-5258';
  const contactEmail = 's.brown.antra@gmail.com';

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
              <span className='cc-data'>Fullstack Engineer</span>
            </p>
            <p className='dev-info'>
              <span className='info-title'>Email: </span>
              <span className='cc-data'>{contactEmail}</span>
            </p>
            <p className='dev-info'>
              <span className='info-title'>Phone: </span>
              <span className='cc-data'>{contactNum}</span>
            </p>
            <div className='cc-resume'>
              <a className='resume-link' rel="noreferrer noopener" target="_blank" href='https://docs.google.com/document/d/1YVXkiY5soZpUe82Pbo9xyGI2XD-WC0jVfgSbT8PjjIU/edit?usp=sharing'>Resumé</a>
            </div>
          </div>
        </div>
        <div className='cc-right'>
          <div className='contact-note'>
            <h2 className='cn-title'>
              Keep In Touch!
            </h2>
            <p className='cn-note'>
              Currently looking for a full time position where I can utilize both my skills as a software developer and an artist. I would also love to work with and on teams that allows for continuous learning, open communication, and a creative outlet. Hope to hear from you soon 😊.
            </p>
            <div className='cn-info'>
              <p className='cn-details'>
                <IoLocationOutline className='cn-icon' />
                <span className='cn-data'>Dallas, TX </span>
                <span className='relocate'>(Willing to relocate Anywhere)
                </span>
              </p>
              <p className='cn-details'>
                <BsPhone className='cn-icon' />
                <span className='cn-data'>{contactNum}</span>
              </p>
              <p className='cn-details'>
                <FiMail className='cn-icon' />
                <span className='cn-data'>{contactEmail}</span>
              </p>
              <div className='social-media'>
                <a className='sm-link' rel="noreferrer noopener" target="_blank" href="https://github.com/Ashley-B1">
                  <FaGithub className='sm-icon' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
