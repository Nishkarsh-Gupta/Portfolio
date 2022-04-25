import React from 'react'
import "../styles/common.css"
import "../styles/project.css"
import "../styles/responsive.css"
import algo from "../images/algoViz.png"
import secret from "../images/secret.png"
import simon from "../images/simon.png"

const Project = () => {
  return (
    <section id='project'>
        <div className='project'>
            <h1 className='title'>Recent <span>Projects</span></h1>
        </div>
        <div className='all-projects'>
            <div className='project-item'>
                <div className='project-info'>
                    <h1 className='head'>Project 1</h1>
                    <h2 className='name'>AlgoViz</h2>
                    <p>Made an Algorithm Visulizer. 
                        With this you visulize the working of differenet sorting algorithms in an histogram form. 
                        The tech used here is HTML CSS Javascript. 
                        It was really fun making this project.
                        <br></br>
                        <span className='id1'>link</span> -<a href="https://github.com/Nishkarsh-Gupta/AlgoViz" target="blank"> <span className='id2'>click me</span></a>
                    </p>
                </div>
                <div className='project-img'>
                    <img className='img-img' src={algo} alt='img'></img>
                </div>
            </div>
            <div className='project-item'>
                <div className='project-info'>
                <h1 className='head'>Project 2</h1>
                    <h2 className='name'>Secrets</h2>
                    <p>Made an Sceret app. 
                        With this you can share your secrets anonymously. 
                        There is also google authentication using passport.js.
                        The tech used here is HTML CSS Javascript Node.js Express.js MongoDB. 
                        It was really fun making this project.
                        <br></br>
                        <span className='id1'>link</span> -<a href="https://github.com/Nishkarsh-Gupta/Secrets" target="blank"> <span className='id2'>click me</span></a>
                    </p>
                </div>
                <div className='project-img'>
                    <img className='img-img' src={secret} alt='img'></img>
                </div>
            </div>
            <div className='project-item'>
                <div className='project-info'>
                <h1 className='head'>Project 3</h1>
                    <h2 className='name'>Simon Game</h2>
                    <p>Made an Javascript Game. 
                        Here you will be shown a pattern and have to follow it by remembering the pattern. 
                        The tech used here is HTML CSS Javascript. 
                        I was really fun making this project.
                        <br></br>
                        <span className='id1'>link</span> -<a href="https://github.com/Nishkarsh-Gupta/Simon-Game/tree/main" target="blank"> <span className='id2'>click me</span></a>
                    </p>
                </div>
                <div className='project-img'>
                    <img className='img-img' src={simon} alt='img'></img>
                </div>
            </div>

        </div>

    </section>
  )
}


export default Project
