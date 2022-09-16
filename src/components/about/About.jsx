import React from 'react'
import './about.css'
import ME from '../../assets/about-lhs.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { MdOutlineSchool } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdOutlineSchool className="about__icon" />
              <h5>Education</h5>
              <small>Univerity Of Science</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Position</h5>
              <small>Front-end Developer</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>4 Completed</small>
            </article>
          </div>

          <p>
            I'm a sophomore at the University of Science. I started to
            access and teach myself web programming in the early 12th grade of
            high school. I would love to become a front-end Developer. And now,
            with my knowledge, I'm hoping to find a job in this field so that I
            can learn and develop myself further. And so the goal I want to work
            on not too far future is to become a Fullstack Developer and
            contribute to the company's projects.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About