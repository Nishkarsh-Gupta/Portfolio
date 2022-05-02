import React from 'react'
import "../styles/navbar.css"
import "../styles/common.css"
import "../styles/responsive.css"
import { useState } from 'react'
import Navlinks from './Navlinks'
// import "../navbar"

const navbarIcon = <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>

// const openNavbar = () => {
//   return this.helper();
// }
// const helper = () => {
//   this.setState({
//     divstyle
//   })
// }

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className='navbar'>
        <div className='heading'>
            <a href='#'><h2><span>N</span>ishkarsh <span>G</span>upta</h2></a>
        </div>
        {/* <Navlinks /> */}
        {/* <div className='bar' onClick={() => {
          setOpen(!open)
          console.log("hii")}
        }>
          <a href='#'>
            <span className='hamburger'>{navbarIcon}</span>
          </a>
        </div> */}
    </div>
  )
}

export default Navbar