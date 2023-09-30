import React, { useEffect, useState } from 'react'
import { links } from '../../Data'
import { BsSun, BsMoon } from 'react-icons/bs'
import shapeOne from '../../assets/shape-1.png';
import './header.css'
import { Link } from 'react-scroll'
import { animateScroll } from 'react-scroll'


const Header = () => {

   const [showMenu, setShowMenu] = useState(false)
   const [scrollNav, setScrollNav] = useState(false)
   const [theme, setTheme] = useState(true)

   const scrollTop = () => {
      animateScroll.scrollToTop()
   }

   const changeNav = () => {
      if (window.scrollY >= 80)
      {
         setScrollNav(true)
      } else
      {
         setScrollNav(false)
      }
   }

   const toggleTheme = () => {
      setTheme(prev => !prev)
   }
   // localStorage.clear()


   useEffect(() => {
      localStorage.setItem('lightTheme', JSON.stringify(theme))
   }, [theme])

   useEffect(() => {
      window.addEventListener('scroll', changeNav)
   }, [])

   useEffect(() => {
      document.body.classList.toggle('no-scroll', showMenu)
   }, [showMenu])

   useEffect(() => {
      document.documentElement.className = theme ? 'lightTheme' : 'darkTheme'
   }, [theme])
   useEffect(() => {
      const newTheme = JSON.parse(localStorage.getItem('lightTheme'))
      setTheme(newTheme)
   }, [])

   return (
      <header className={`${scrollNav ? 'scroll-header' : ''} header`}>
         <div onClick={() => setShowMenu(false)} className={`${showMenu ? 'overlay-menu' : ''} overlay`}></div>
         <nav className="nav">
            <a
               title='Go to Dev home'
               href='#home'
               className="nav__logo text-cs"
               onClick={scrollTop}>
               Dev.</a>

            <div className={
               `${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`
            }>
               <div className="nav__data">
                  <ul className="nav__list">
                     {links.map(({ name, path }, index) => {
                        return (
                           <li className="nav__item" key={index}>
                              <Link
                                 title={`Go to ${name}`}
                                 className='nav__link text-cs'
                                 to={path}
                                 spy={true}
                                 smooth={true}
                                 // hashSpy={true}
                                 offset={-150}
                                 duration={100}
                                 onClick={() => setShowMenu(false)}
                              >
                                 {name}
                              </Link>
                           </li>
                        )
                     })}
                  </ul>
               </div>
               <div className="section__deco deco__left header__deco">
                  <img src={shapeOne} alt="decoration design" className="shape" />
               </div>
            </div>
            <div className="nav__btns">
               <div title='Toggle Theme' className="theme__toggler" onClick={toggleTheme}>
                  {theme ? <BsMoon /> : <BsSun />}
               </div>
               <div title='menu bar' className={
                  `${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`
               }
                  onClick={() => setShowMenu(prev => !prev)}>
                  <span></span>
                  <span></span>
               </div>
            </div>
         </nav>
      </header>
   )
}

export default Header
