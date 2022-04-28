import React from 'react'
import "../styles/common.css"
import '../styles/intro.css'
import "../styles/responsive.css"
import "../styles/responsive.css"

const Intro = () => {
  return (
    <div id='intro'>
        <div className='content'>
            <h1>Hello, </h1>
            <h1>My name is </h1>
            <h1><span>Nishkarsh Gupta.</span></h1>
            <a href='#about' type='button'>About Me</a>
        </div>
    </div>
  )
}

export default Intro
