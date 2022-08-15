import React from 'react'

import './Introduction.css'
import devPhoto from '../../images/dev-photos/dev06.png'

const Introduction = () => {
  return (
    <div className='intro'>
      <div className='intro-left'>
        <div className='intro-left-wrapper'>
          <h2 className='first-intro'>What's up, my name is</h2>
          <h1 className='intro-name'>Skye Brown</h1>
          <div className='intro-title'>
            <div className='intro-title-wrapper'>
              <div className='intro-title-item'>Frontend Developer</div>
              <div className='intro-title-item'>UI Developer</div>
              <div className='intro-title-item'>Fullstack Developer</div>
              <div className='intro-title-item'>Poet</div>
              <div className='intro-title-item'>Writer</div>
            </div>
          </div>
          <div className='intro-desc'>
            I am a tiny technomancer making her way in the tech world! I consider myself a virtual artist because I don't just code, I create art. 
          </div>
        </div>
      </div>
      <div className='intro-right'>
        <div className='intro-bg'></div>
        <img src={devPhoto} alt='skye' className='intro-img' />
      </div>
    </div>
  )
}

export default Introduction
