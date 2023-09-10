import React, { useRef, useState } from 'react'
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import './contact.css'
import {
  FaRegAddressBook,
  FaRegEnvelope,
  FaRegUser,
  FaRegMap
} from 'react-icons/fa'

const Contact = () => {
  const form = useRef()
  
  const sendEmails = (e) => {
    e.preventDefault();
    toast.success('Sent Successfully', {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });

    emailjs.sendForm('service_seowtum', 'template_ljr6sed', form.current, 'K3OAN3uXD2plh7dXW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  }

  return (
    <section className='contact section' id='contact'>
      <h2 className='section__title text-cs'>Contact Me</h2>
      <p className="section__subtitle">
        I'm <span>Open for jobs</span>
      </p>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegMap />
            </span>

            <h3 className="contact__card-title">Address</h3>
            <p className="contact__card-data">Victoria Island, Lagos Nigeria.</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegUser />
            </span>

            <h3 className="contact__card-title">Remote / On-Site</h3>
            <p className="contact__card-data">Available ( contact me )</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegEnvelope />
            </span>

            <h3 className="contact__card-title">Email Address</h3>
            <p className="contact__card-data">devisrael01gmail.com</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegAddressBook />
            </span>

            <h3 className="contact__card-title">Phone Number</h3>
            <p className="contact__card-data">+234 816 395 2231</p>
          </div>   
        </div>

        <form ref={form} className="contact__form" onSubmit={sendEmails}>
          <div className="contact__form-group grid">
            <div className="contact__form-div">
              <label className="contact__form-tag text-cs">
                Your Full Name
              </label>
              <input
                type="text"
                name='name'
                value={form.name}
                className="contact__form-input" required />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag text-cs">
                Your Email Address
              </label>
              <input
                type="email"
                name='email'
                value={form.email}
                className="contact__form-input" required />
            </div>
          </div>
          <div className="contact__form-div">
            <label className="contact__form-tag text-cs">
              Your Subject
            </label>
            <input
              type="text"
              name='subject'
              value={form.subject}
              className="contact__form-input" />
          </div>
   
          <div className="contact__form-div contact__form-area">
            <label className="contact__form-tag text-cs">
              Your Message
            </label>
            <textarea
              name='message'
              value={form.message}
              className='contact__form-input'></textarea>
          </div>

          <div className="contact__submit">
            <p>* Please fill correctly before sending.</p>
            <button title='Send' type='submit' className='btn text-cs'>
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="section__deco deco__left">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title contact__bg">Contact Me</span>
      </div>
    </section>
  )
}

export default Contact
