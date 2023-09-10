import React from 'react'
import shapeOne from '../../assets/shape-1.png';
import { skills } from '../../Data'
import './skills.css'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className='section__title text-cs'>Professional Skills</h2>
      <p className='section__subtitle'>
        My <span>Talents</span>
      </p>

      <div className="skills__container container grid" >
        {skills.map(({ image, name, description }, index) => {
          return (
            <div title={name} className="skills__item" key={index}>
              <div className="skills__titles">
              <img src={image} className='skill__img' alt="skills image" />
                <h3 className="skills__name">{name}</h3>
              </div>

              <p className="skills__description">{description}</p>
            </div>
          )
        })}
      </div>

      <div className="section__deco deco__left">
        <img src={shapeOne} alt="decoration design" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Skills</span>
      </div>
    </section>
  )
}

export default Skills
