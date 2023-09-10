import React, { useState } from 'react'
import Items from './Items'
import shapeOne from '../../assets/shape-1.png';
import './portfolio.css'
import { AnimatePresence } from 'framer-motion'

const Portfolio = () => {

  return (
    <section className="portfolio section" id="project">
      <h2 className='section__title text-cs'>Projects</h2>
      <p className='section__subtitle'>
        My <span>Works</span>
      </p>
      <div className="portfolio__container container grid">
        <AnimatePresence initial={false}>
          <Items />
        </AnimatePresence>
      </div>

      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Projects</span>
      </div>
    </section>
  )
}

export default Portfolio
