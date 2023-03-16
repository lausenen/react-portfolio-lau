import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='https://www.linkedin.com/in/lau-thomsen-046b08260/' target="__blank"><BsLinkedin></BsLinkedin></a>
        <a href='https://github.com/lausenen' target="__blank"><BsGithub></BsGithub></a>
    </div>
  )
}

export default HeaderSocials