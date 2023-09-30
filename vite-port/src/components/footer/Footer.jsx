import React from 'react'
import './footer.css'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
   return (
      <footer className='footer'>
         <div className="footer__container container grid">
            <div className="footer__socials">
               <a title='View LinkedIn profile' href="https://linkedin.com/in/dev--israel/" className="home__social-link">
                  <FaLinkedin />
               </a>
            </div>

            <p className="footer__copyright text-cs">
               &copy; Copyright 2023. All Rights Reserved
            </p>
            <p className="footer__copyright text-cs">
               Developed By <span title='Dev Israel'>Dev Israel</span>
            </p>
         </div>
      </footer>
   )
}

export default Footer
