import React from 'react'
import "../styles/myskills.css"
import "../styles/common.css"
import "../styles/responsive.css"
import "../styles/responsive.css"

const Myskills = () => {
  return (
    <section id='skills'>
        <div className='skills container1'>
            <div className='skill-header'>
                <h1 className='title'>My <span>Skills</span></h1>
            </div>
            <div className='all-skills'>
                <ul>
                    <li>C++</li>
                    <li>Javascript</li>
                    <li>React Js</li>
                    <li>Node Js</li>
                    <li>MongoDB</li>
                    <li>Data Structures and Algorithms</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Myskills
