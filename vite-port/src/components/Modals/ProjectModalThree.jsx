import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { FaCode, FaEye, FaGithub, FaStop, FaTimes } from 'react-icons/fa'
import './modal.css'

import ReactLogo from '../../assets/react-logo.svg.svg'
import JavascriptLogo from '../../assets/javascript-logo.svg.svg'
import SassLogo from '../../assets/sass-logo.svg.svg'
import TailwindLogo from '../../assets/tailwind-logo.svg.svg'
import CssLogo from '../../assets/css-logo.svg.svg'
import HtmlLogo from '../../assets/html-logo.svg.svg'
import FigmaLogo from '../../assets/figma-logo.svg.svg'
import GitLogo from '../../assets/git-logo.svg.svg'
import GithubLogo from '../../assets/github-logo.svg.svg'


const ProjectModalThree = ({ open, onClose, img}) => {
  useEffect(() => {
    document.body.classList.toggle('no-scroll', open)
  }, [open])
  if (!open) return null
  return ReactDOM.createPortal(
    <>
      <div onClick={onClose} className={`${open ? 'overlay-modal' : ''} over-menu`}></div>
            <div className='modal'>
              <div title='Scroll down to see more' className='banner'>
                <img className='banner-img' src={img} alt="banner image" />
                <div className='more'>
                  <a title='View Website live' href='https://dev-israel.netlify.app' target='blank' className='more-icon'>
                    <FaEye className='icon' />  
                    <span>View Live</span>
                  </a>
                  <a title='View source code with github' href='https://github.com/DevIsraelHub/Portfolio/tree/main/vite-port' target='blank' className='more-icon'>
                    <FaGithub className='icon' />
                    <span>Source Code</span>
                  </a>
                </div>
                <span title='Close' onClick={onClose} className='close-icon'>
                  <FaTimes />
                </span>
              </div>
              <div className='body'>
                <div className='heading'>
                  <h2>My Portfolio </h2>
                  {/* <div className="tools">
                  <span>What I used :</span>
                    <img title='React' className='tool-img' src={ReactLogo} alt="" />
                    <img title='Javascript' className='tool-img' src={JavascriptLogo} alt="" />
                    <img title='CSS' className='tool-img' src={CssLogo} alt="" />
                    <img title='HTML' className='tool-img' src={HtmlLogo} alt="" />
                  </div> */}
                </div>
                <p className='desc'>
                  This is a modern personal portfolio i built for my self, in order to let known my skills.
                </p>
                {/* <div className='main-body'>
                  <h2 className='title'>What Problem Does It Solve ?</h2>
                  <p className='reason'>
                    &nbsp; &nbsp; &nbsp; &nbsp; This platform is intented to reduce the complicated user interface most user have to encounter before making a purchase. making it easier and faster for anyone who wants to purchase online whether a kid or an adult. Because of it great visually appealing and
                    intuitive interfaces that dosen't take user's much step in order to make a purchase.
                  </p>
                  <h2 className='title'>Problems I encountered & its solutions</h2>
                  <ul>
                    <li>
                      The add to cart functionality gave me little hard time sorting out due to it large state management. but with the react useContext hook i was able to create it.
                    </li>
                    <li>
                      The implementation of the search functionality was a bit complex, but with the array methods i was able to sort out.
                    </li>
                    <li>
                      The perfomance Optimization was negatively impacting the speed and user experience of the website, so I implemented lazy loading, code splitting, and optimizing images.
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
    </>,
    document.getElementById('portal')
  )
}

export default ProjectModalThree
