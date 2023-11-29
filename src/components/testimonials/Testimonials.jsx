import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/piffers-security-services-40a27841/',
      name: 'Salman Yousaf Sales Manger PIFFERS Security Services',
      role: 'Full-Stack Software Developer. Bootstrap | Php-Laravel.',
      test: 'As a developer and a problem solver, I think Talha is a great collaborative partner to have.I have had the pleasure of working closely with Talha on numerous software projects, and his expertise has been invaluable. His deep understanding of complex coding languages and problem-solving abilities have consistently impressed me. Talha(s) dedication to excellence and his clear communication have significantly contributed to the success of our projects. Working with Talha has been an absolute pleasure, and I highly recommend him for any development endeavors.',
    },
  ];

  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        spaceBetween={40}
        slidesPerView={1}
      >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <div className="client__avatar">
              <a href={test.link}>
                <BsLinkedin />
              </a>
            </div>
            <h5 className='client__name'>{test.name}</h5>
            <small className="client__review">{test.test}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
