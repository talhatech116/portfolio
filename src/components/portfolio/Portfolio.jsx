import React from 'react';
import IMG1 from '../../assets/piffers.png';
import IMG2 from '../../assets/ledger.png';
import IMG4 from '../../assets/arabian.PNG';
import IMG5 from '../../assets/falcon.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'PIFFERS Security Services',
      img: IMG1,
      description:
        'Piffers Security Services is a software that incorporates complex modules such as HRM, Operations, Training, Regulatory Affairs,Sales, CRM, ERM, and others. It has been developed with the purpose of enabling a company to manage its transformation and operations at a large scale, just like Piffers, which is operating throughout Pakistan.',
      technologies: 'Bootstrap | JavaScript | PHP Laravel',
    },
    {
      id: 2,
      title: 'Transarabian Website',
      img: IMG4,
      description:
        'Transarabian is an employment agency that employs people for positions in other countries. Candidates build their profiles and are given a dashboard where they can view the jobs they have applied for and their status.',
      technologies: 'Bootstrap | JavaScript | PHP Laravel',
    },
    {
      id: 3,
      title: 'Transarabian Software',
      img: IMG2,
      description: 'The admin panel of Transarabian was transformed into software. On the website, after an employee is shortlisted, their ledger is calculated. It provides a detailed breakdown of where the employees fees were deposited and how this expense was utilized, with a detailed explanation in the ledger just like a bank statment.',
      technologies: 'Template Modification | PHP Laravel',
    },
    {
      id: 4,
      title: 'Falcon Transport',
      img: IMG5,
      description: 'This is a UK-based website where customers enter their desired locations, along with details. Based on this information, the website displays available vehicles and their respective fares. After the customer confirms the booking and makes the payment, they receive a confirmation email. Designed to provide customers with a fast and convenient way to make travel.',
      technologies: 'Template Modification | PHP Laravel',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
