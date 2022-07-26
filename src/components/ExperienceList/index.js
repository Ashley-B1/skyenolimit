import React from 'react';
import './ExperienceList.css';
import { experience } from '../../data';
import Experience from '../Experience';

const ExperienceList = () => {
  return (
    <div className='work-exp'>
      {experience.map(exp => (
        <div className='exp-container'>
          <Experience key={exp.id} title={exp.title} company={exp.company} date={exp.date} skills={exp.skills} />
        </div>
      ))}
    </div>
  )
}

export default ExperienceList
