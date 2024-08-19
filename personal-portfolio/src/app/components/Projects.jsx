import React from 'react'
import Image from 'next/image'
import github from '../assets/GitHubIcon.png'
import HBnB from '../assets/HBnB.png'
import TKT from '../assets/SmartTraffic.jpg'

const Projects = () => {
    return (
        <>
            <div id="projects" className='projects-row'>
                <h1 className="creation-span" style={{ fontSize: "44px", fontWeight: "bold", padding: "5px", height: "16%" }}>projects</h1>
                <div className='projects-col'>
                    <div className='project-card'>
                        <div style={{ width: "10%", height: "400px" }}><p className='lan'>HTML | CSS | JS | Python</p></div>
                        <div className="card-img" style={{ border: "1px solid gold", width: "45%", borderRadius: "60px" }}>
                            <Image className='project-image' src={HBnB} alt="HBnB" />
                        </div>
                        <div className="card-content">
                            <div style={{ fontSize: "36px", fontWeight: "bold", fontFamily: "sans-serif", color: "skyblue" }}>HBnB</div>
                            <a href='https://github.com/khiba-k/holbertonschool-hbnb-client'> <Image style={{ width: "48px", height: "48px" }} src={github} alt="git hub icon" /> </a>
                        </div>
                    </div>
                    <div className='project-card'>
                        <div style={{ width: "10%", height: "400px" }}><p className='lan'>ReactJS | CSS | Bootstrap  | Python</p></div>
                        <div className="card-img" style={{ border: "1px solid gold", width: "45%", borderRadius: "60px" }}>
                            <Image className='project-image' src={TKT} alt="TKT Smart Traffic" />
                        </div>
                        <div className="card-content">
                            <div style={{ fontSize: "36px", fontWeight: "bold", fontFamily: "sans-serif", color: "#288066" }}>TKT Smart Traffic</div>
                            <a href='https://github.com/THATONEKO/INTELLIGENT-TRAFFIC-SYSTEM-1-/tree/main'> <Image style={{ width: "48px", height: "48px" }} src={github} alt="git hub icon" /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
