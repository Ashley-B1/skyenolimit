import React from 'react'

import './Introduction.css'
import devPhoto from '../../images/dev-photos/dev2.png'

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
              <div className='intro-title-item'>UI/UX Designer</div>
              <div className='intro-title-item'>Virtual Artist</div>
              <div className='intro-title-item'>Poet</div>
              <div className='intro-title-item'>Writer</div>
            </div>
          </div>
          <div className='intro-desc'>
            Icing shortbread fruitcake lemon drops gummi bears biscuit. Biscuit shortbread cake bear claw chocolate cheesecake I love chocolate.
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
