import React from 'react'
import './footer.css'
import {  FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container container grid">
        <div className="footer__socials">
            <a target='blank' title='View twitter profile'  href="https://twitter.com/Dev__Israel/" className="footer__social-link">
                <FaTwitter />
            </a>
            <a target='blank' title='View instagram profile' href="https://www.instagram.com/dev__israel/" className="footer__social-link">
                <FaInstagram />
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
