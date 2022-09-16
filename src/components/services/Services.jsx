import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>BackEnd Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building API from NodeJS and ExpressJS.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Knowing how to connect MongoDB to Sever.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Managing the data with MongoDB.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Using JWT to authenticate and exchange information.</p>
            </li>
          </ul>
        </article>
        {/* END OF BACKEND */}
        <article className="service">
          <div className="service__head">
            <h3>FrontEnd Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating website UI from Photoshop and Figma.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Using ReactJS to build Client-Side Rendering.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Knowning how to use Function Components.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Knowing how to use Hooks and create a Custom Hook.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Calling API from server.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Knowing how to use ContextAPI.</p>
            </li>
          </ul>
        </article>
        {/* FRONTEND DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>A few other things</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>The ability to work with Git and Github.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>The ability to read English is pretty good.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Good Communication skills.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Good Teamwork skills.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
}

export default Services