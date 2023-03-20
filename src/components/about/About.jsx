import React from 'react'
import './about.css'
import ME from '../../assets/me-about1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
        
        <img src={ME} alt="About Image"></img>
      </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className='about__icon'></FaAward>
            <h5>Experience</h5>
            <small>3 Years Learning Experience</small>
          </article>

          <article className="about__card">
            <FiUsers className='about__icon'></FiUsers>
            <h5>Experience</h5>
            <small>Worked With CareerMentor For ½ Years</small>
          </article>

          <article className="about__card">
            <FaAward className='about__icon'></FaAward>
            <h5>Projects</h5>
            <small>20+ completed projects</small>
          </article>
        </div>

        <p>I am an software student at DTU on my sixth semester. I am specialized in android development and webdevelopment. As a person I am very ambitous and always looking for a challenge!</p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About
