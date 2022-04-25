import React from 'react'
import "../styles/footer.css"
import "../styles/common.css"
import "../styles/responsive.css"
import insta from "../images/instagram-new.png"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="heading2">
        <h1 className='title1'><span>N</span>ishkarsh <span>G</span>upta</h1>
      </div>
      <h2>Thank You for the Visit!</h2>
      <div className='social-icon'>
        <div className='social-item'> 
          <a href='https://www.instagram.com/nishkarsh_1010/' target="_blank">
            <img src={insta}></img>
          </a>
        </div>
        <div className='social-item'> 
          <a href='https://github.com/Nishkarsh-Gupta' target="_blank">
            <img src={github}></img>
          </a>
        </div>
        <div className='social-item'> 
          <a href='https://www.linkedin.com/in/nishkarsh-gupta-66073a192/' target="_blank">
            <img src={linkedin}></img>
          </a>
        </div>
      </div>
      <p className='love'>Made with ❣️ by Nishkarsh Gupta</p>
    </footer>
  )
}

export default Footer
