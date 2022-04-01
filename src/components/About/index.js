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
        <p className='about-sub'>In summer 2020, I started my coding journey and never looked back. I practiced building static websites on my local machine with HTML and CSS. I would build out wireframes using paper and dry erase boards.</p>
        <p className='about-desc'>
          I started App Academy April of 2021 and did well in my classes, asked great questions, and was a great peer programmer, however when classes were over I had to face my personal demons. I got sick 2 times during my cohort and had to be deferred. I was also in a very toxic living situation, so I was not able to focus on code outside of school. I felt exhausted both in and out of class, and had very little support. I felt defeated and lost and did not know what to do. I loved coding, I felt so much satisfaction debugging and building out websites.
        </p>
        <p className='about-desc ab2'>
          After my last deferral in February of 2022, I realized I have all the skills for front-end development such as HTML, CSS, Javascript, React, React-Redux, and Pug. I also have some backend skills such as Express, Sequelize, and PostgreSQL. Bootcamp did help me get and use the proper resources to be a developer such as GitHub and explaining what and why we use certain syntax over another. I also have several peers that were able to graduate that are now my mentors. I'm glad boot camps surrounded me with like-minded peers and gave me an in-depth scope of what software development is.
        </p>
      </div>
    </div>
  )
}

export default About
