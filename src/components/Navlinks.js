import React from 'react'
import "../styles/navlinks.css"

const Navlinks = () => {
  return (
    <div className='nav-links'>
      <ul>
          <li><a href='#intro' data-after = "Home">Home</a></li>
          <li><a href='#about' data-after = "About Me">About Me</a></li>
          <li><a href='#skills' data-after = "Skills">Skills</a></li>
          <li><a href='#project' data-after = "Projects">Projects</a></li>
          <li><a href='#contact' data-after = "Contact">Contact</a></li>
      </ul>
    </div>
    // <div className="nav-list">
    //     <div className='hamburger'>
    //         <div class="bar"></div>
    //     </div>
    // </div>
  )
}

export default Navlinks
