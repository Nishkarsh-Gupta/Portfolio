import React from 'react'
import "../styles/common.css"
import "../styles/about.css"
import "../styles/responsive.css"
import image from "../images/myimage.jpg"

const About = () => {
  return (
    <div id='about'>
      <div className='col-left'>
        <div className='about-img'>
            <img src={image} alt='Nishkarsh'></img>
        </div>
      </div>
      <div className='col-right'>
        <div className='discription'></div>
            <h1>About <span>Me</span></h1>
            <h3>Web Developer</h3>
            <p>
                I'm a student of Guru Jambheshwar University Of Science and Technology, Hisar pursuing Bachelors degree in Information Technology.
                I'm very much interest in coding, i like to solve problem on leetcode, codechef and other platforms.
                I also like to make projects related to Web Development.

            </p>
            <a href='' type='button'>Resume</a>
      </div>
    </div>
  )
}

export default About
