import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio-1.png'
import IMG2 from '../../assets/portfolio-2.png'
import IMG3 from '../../assets/portfolio3.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Admin Dashboard for hotel booking page",
    github: "https://github.com/lhsang03/HaSadmin.git",
    demo: "https://hasadministration.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "HaSabooking - This is a hotel reservation site",
    github: "https://github.com/lhsang03/HaSabooking.git",
    demo: "https://hasabooking.netlify.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "The API for Booking page and Admin page",
    github: "https://github.com/lhsang03/HaSa---API.git",
    demo: "https://github.com/lhsang03/HaSa---API.git",
  }
];


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio