import React from 'react'
import "../styles/common.css"
import "../styles/contact.css"
import "../styles/responsive.css"
import email from "../images/gmail-icon.png"
import phone from "../images/phone-icon.png"

const Contact = () => {
  return (
    <div className='contact'>
        <div className='heading1'>
            <h1 className='title'>CONTACT <span>INFO</span></h1>
        </div>
        <div className='items'>
            <div className='item'>
                <img src={email} className="icon"></img>
                <h1>Email</h1>
                <h3>nishkarsh.gupta1036@gmail.com</h3>
            </div>
            <div className='item'>
                <img src={phone} className="icon"></img>
                <h1>Phone</h1>
                <h3>+91-9350007544</h3>
            </div>

        </div>
    </div>
  )
}

export default Contact
