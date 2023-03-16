import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
      <article className='service'>
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>

        <ul className='service_list'>
          <li><BiCheck className='service_list-icon'/>
          <p>I understand to always put the user first.</p></li>
          <li><BiCheck className='service_list-icon'/>
          <p>I make products that are fun and entuitive to use.</p></li>
          <li><BiCheck className='service_list-icon'/>
          <p>I understand that the less clicks the better</p></li>
          <li><BiCheck className='service_list-icon'/>
          <p>The UX design is made with multiple design patterns in mind, eg. Gestalt principles</p></li>
          <li><BiCheck className='service_list-icon'/>
          <p>Can use multiple UX design tools such as Figma .</p></li>
        </ul>
      </article>
      {/* END OF UI/UX */}

      <article className='service'>
        <div className="service__head">
          <h3>Web Development</h3>
        </div>

        <ul className='service_list'>
          <li><BiCheck className='service_list-icon'/>
          <p>Good knowledge about the React & Node.js frameworks.</p></li>
          <li><BiCheck className='service_list-icon'/>
          <p></p></li>
          <li><BiCheck className='service_list-icon'/>
          <p> I know how to use several javascript frameworks such as Swiperjs.</p></li>
          <li><BiCheck className='service_list-icon'/>
          <p>I have an eye for detail and will make sure your website looks the best it can </p></li>
          <li><BiCheck className='service_list-icon'/>
          <p>I am able to connect your front end program to a backend database</p></li>
          <li><BiCheck className='service_list-icon'/>
          <p>I am experienced with PHP, mariaDB and MongoDB</p></li>
        </ul>
      </article>
      {/* END OF WEBDEVELOPMENT */}

      <article className='service'>
        <div className="service__head">
          <h3>Content Creation</h3>
        </div>

        <ul className='service_list'>
          <li><BiCheck className='service_list-icon'/>
          <p>I am experienced with image manipulation programs such as photoshop.</p></li>
          <li><BiCheck className='service_list-icon'/>
          <p>I can make simple logos and figures</p></li>
          <li><BiCheck className='service_list-icon'/>
          <p>I am able to edit video content </p></li>
          <li><BiCheck className='service_list-icon'/>
          <p>I can format files and data so they are ready for use</p></li>
          
        </ul>
      </article>
      {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services