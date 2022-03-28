import React from 'react';

import './About.css'
import aboutPhoto from '../../images/dev-photos/main-photo.jpeg'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <div className='about-card bg'></div>
        <div className='about-card'>
          <img src={aboutPhoto} alt='dev' className='about-image' />
        </div>
      </div>
      <div className='about-right'>
        <h1 className='about-title'>About Me</h1>
        <p className='about-sub'>Apple pie I love I love biscuit fruitcake danish chocolate apple pie. Lollipop I love gummi bears gingerbread biscuit I love soufflé I love croissant.</p>
        <p className='about-desc'>
          Bear claw I love oat cake oat cake sweet bear claw jelly-o marzipan. Jelly beans chocolate bar gingerbread sesame snaps gummi bears. Lollipop toffee gingerbread I love I love candy canes tootsie roll croissant. Gingerbread danish topping tart jelly beans fruitcake lollipop gummi bears sweet roll. I love tart macaroon croissant fruitcake halvah I love marzipan.
        </p>
      </div>
    </div>
  )
}

export default About
