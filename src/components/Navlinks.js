import React from 'react'
import "../styles/navlinks.css"
import {GiHamburgerMenu} from 'react-icons/gi'

const Navlinks = (props) => {
  return (
    <div className='nav-links'>
      <GiHamburgerMenu className='close-btn'
        onClick={() => props.isOpen && props.closeMenu()}
        size="30px" color="white"
      />
      <ul>
          <li onClick={() => props.isOpen && props.closeMenu()}>
            <a href='#intro' data-after = "Home">Home</a>
          </li>
          <li onClick={() => props.isOpen && props.closeMenu()}>
            <a href='#about' data-after = "About Me">About Me</a>
          </li>
          <li onClick={() => props.isOpen && props.closeMenu()}>
            <a href='#skills' data-after = "Skills">Skills</a>
          </li>
          <li onClick={() => props.isOpen && props.closeMenu()}>
            <a href='#project' data-after = "Projects">Projects</a>
          </li>
          <li onClick={() => props.isOpen && props.closeMenu()}>
            <a href='#contact' data-after = "Contact">Contact</a>
          </li>
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
