import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import shapeTwo from '../../assets/shape-2.png';
import { motion } from 'framer-motion';

import Project2 from '../../assets/travel.png';
import Project3 from '../../assets/port-img.png';
import Project5 from '../../assets/fastify.png';

import ProjectModal from '../Modals/ProjectModal';
import ProjectModalThree from '../Modals/ProjectModalThree';
import ProjectModaltwo from '../Modals/ProjectModalTwo';

const Items = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenTwo, setIsOpenTwo] = useState(false)
  const [isOpenThree, setIsOpenThree] = useState(false)


  return (
          <>
            <motion.div
              layout
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0.8, scale: 0.6 }}
              exit={{ opacity: 0.8, scale: 0.6 }}
              transition={{ duration: 0.3 }}
              className="portfolio__items card card-two">
              <div className="portfolio__img-wrapper">
                <img onClick={() => setIsOpen(true)} src={Project5} alt="project  image" className='portfolio__img' />
              </div>
              <button onClick={() => setIsOpen(true)} className='link'>
                View more
                <FaArrowRight className='link__icon'></FaArrowRight>
              </button>
            </motion.div>
              <ProjectModal img={Project5} open={isOpen} onClose={() => setIsOpen(false)} />
            <motion.div
              layout
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0.8, scale: 0.6 }}
              exit={{ opacity: 0.8, scale: 0.6 }}
              transition={{ duration: 0.3 }}
              className="portfolio__items card card-two">
              <div className="portfolio__img-wrapper">
                <img onClick={() => setIsOpenTwo(true)} src={Project2} alt="project  image" className='portfolio__img' />
              </div>
              <button onClick={() => setIsOpenTwo(true)} className='link'>
                View more
                <FaArrowRight className='link__icon'></FaArrowRight>
              </button>
            </motion.div>
            <ProjectModaltwo img={Project2} open={isOpenTwo} onClose={() => setIsOpenTwo(false)} />
            <motion.div
              layout
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0.8, scale: 0.6 }}
              exit={{ opacity: 0.8, scale: 0.6 }}
              transition={{ duration: 0.3 }}
              className="portfolio__items card card-two">
              <div className="portfolio__img-wrapper">
                <img onClick={() => setIsOpenThree(true)} src={Project3} alt="project  image" className='portfolio__img' />
              </div>
              <button onClick={() => setIsOpenThree(true)} className='link'>
                View more
                <FaArrowRight className='link__icon'></FaArrowRight>
              </button>
            </motion.div>
              <ProjectModalThree img={Project3} open={isOpenThree} onClose={() => setIsOpenThree(false)} />
          </>
  )
}

export default Items
