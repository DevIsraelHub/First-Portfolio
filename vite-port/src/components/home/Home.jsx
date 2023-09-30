import React from 'react'
import profileImg from '../../assets/profilePic.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import Resume from '../../assets/DevResume.pdf'
import { FaLinkedin } from 'react-icons/fa';
import './home.css';

const Home = () => {

   return (
      <section className='home' id='home'>
         <div className="home__wrapper">
            <div className="home__container container">
               <p className="home__subtitle text-cs">
                  Hello, <span>My Name Is</span>
               </p>

               <h1 className='home__title text-cs'>
                  <span>Dev</span> Israel
               </h1>

               <p className="home__job">
                  <span className='text-cs'>I Am A</span>
                  <b>Frontend Web Developer</b>
               </p>

               <div className="home__img-wrapper">
                  <div className="home__banner">
                     <img
                        title='Dev profile image'
                        src={profileImg}
                        alt="My Profile IMG"
                        className='home__profile'
                     />
                  </div>

                  <p className="home__data home__data-one">
                     <span className='text-lg'>
                        Very Fluent
                     </span>
                     <span className='text-sm'>
                        <a target='Fluent In English'>In English</a>
                     </span>
                  </p>
                  <p className="home__data home__data-two">
                     <span className='text-sm'>
                        <b>Excellent</b> <span>collaboration skills</span>
                     </span>
                  </p>

                  <img src={shapeOne} alt="shape1 image" className="shape shape__1" />
                  <img src={shapeTwo} alt="shape1 image" className="shape shape__2" />
                  <img src={shapeTwo} alt="shape1 image" className="shape shape__3" />
               </div>

               <p className="home__text">
                  {/* From France, Paris. I have rich experience in web design, also I am good at UI/UX Design. I love to talk with you about my designs. */}
                  I am skilled in building responsive and user-friendly web applications, also have rich experience in UI/UX design principles.
               </p>

               <div className="home__socials">
                  <a title='View LinkedIn profile' href="https://linkedin.com/in/dev--israel/" className="home__social-link">
                     <FaLinkedin />
                  </a>
               </div>

               <div className="home__btns">
                  <a title='Download my resume' download href={Resume} className="btn text-cs">
                     Download Resume
                  </a>
                  <a title='Go to contact me' href="#contact" className="hero__link text-cs">
                     Contact Me</a>
               </div>
            </div>

            <div className="section__deco deco__left">
               <img src={shapeOne} alt="" className="shape" />
            </div>
         </div>

         <div className="section__bg-wrapper">
            <span className="bg__title">Frontend</span>
         </div>
      </section>
   )
}

export default Home
