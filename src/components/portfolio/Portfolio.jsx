import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import video from '../../assets/Game.mp4'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img id='weird' src={IMG1} alt=""/>
          </div>
          <h3>CareerMentor's Android App</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com/lausenen'/>
          <a href='https://google.com' className='btn btn-primary' target='blank'>Live Demo</a>
          </div>

        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt=""/>
          </div>
          <h3>Android Solitaire Solver</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com/lausenen'/>
          <a href='https://google.com' className='btn btn-primary' target='blank'>Live Demo</a>

          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <video width="300" height="300" controls >
            <source src={video} type="video/mp4"/>
          </video>
          </div>
          <h3>Multiplayer Game made with C#</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com/lausenen'/>
          <a href='https://google.com' className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio