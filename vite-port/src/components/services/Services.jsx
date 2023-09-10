import React from 'react'
import { services } from '../../Data'
import { FaArrowRight } from 'react-icons/fa'
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import './services.css'

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className='section__title text-cs'>What I Offer</h2>
      <p className='section__subtitle'>
        My <span>Services</span>
      </p>

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          }
        }}
        modules={[Pagination]}
        className="services__container container mySwiper">

        {services.map(({ image, title, description }, index) => {
          return (
            <SwiperSlide title={title} className="services__item card card-one" key={index}>
              <img className='img' src={image} alt="my service image" />
              <div>
                <h3 className="services__title">{title}</h3>
                <p className="services__description">{description}</p>
                <img loading='lazy' src={shapeTwo} alt="shape 2" className="shape c__shape" />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>

      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Service</span>
      </div>

    </section>
  )
}

export default Services
