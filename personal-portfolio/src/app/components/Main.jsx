import React from 'react'
import Projects from './Projects'
import Image from 'next/image'
import photo from '../assets/headshot.png'
import PythonI from '../assets/PythonIcon.png'
import NxtI from '../assets/NextIcon.png'
import HTMLI from '../assets/HTMLIcon.png'
import ReactI from '../assets/ReactIcon.png'
import JscriptI from '../assets/JavascriptIcon.png'
import TailI from '../assets/TailWindIcon.png'
import BootI from '../assets/BootstrapIcon.png'
import CSSI from '../assets/CSSIcon.png'
// import CI from '../assets/CIcon.png'
import FigmaI from '../assets/FigmaIcon.png'
import GoogleI from '../assets/GoogleIcon.png'
import SocialMedia from './SocialMedia'
import "../styles/AboutRow.css"

const Main = () => {
    return (
        <>
            {/* Side Col */}
            <div className="side-col"></div>
            {/* Middle Col */}
            <div className="middle-col">
                {/* About Row */}
                <div id="intro" className='about-row'>
                    <div className='upper-row'>
                        <div className="p-col">
                            <p className="intro-p">
                                from concept to {" "}
                                <span className="creation-span">creation</span>
                            </p>
                            <p className="hello-world">Hello World! I’m Khiba Koenane, a visionary full-stack developer from Southern Africa, specializing in crafting seamless, innovative web solutions. Let’s turn your vision into reality with cutting-edge technology and expert design.</p>
                        </div>
                        <div className="p2-col">
                            {/* Headshot Row */}
                            <div className='headshot-row'>
                                <Image src={photo} className="headshot" alt='professional photo' />
                            </div>
                            {/* Skills Row */}
                            <div className='skills'>
                                <p className="khiba" >Khiba Koenane, <span style={{ color: "#FF0066" }}>Web Developer | </span>  <span style={{ color: "#9C3D9B" }}>Software Developer | </span> <span style={{ color: "skyblue" }}>IoT Developer</span></p>
                            </div>
                        </div>
                    </div>
                    {/* Language and Tools Row */}
                    <div className='lower-row'>
                        <p className='lower-p'>Yeah, I'm Multilingual and Handy With The Tools: &nbsp;</p>
                        <Image src={PythonI} className='language-icons' alt="python" />&nbsp;
                        <Image src={NxtI} className='language-icons' alt="python" />&nbsp;
                        <Image src={ReactI} className='language-icons' alt="python" />&nbsp;
                        <Image src={JscriptI} className='language-icons' alt="python" />&nbsp;
                        <Image src={HTMLI} className='language-icons' alt="python" />&nbsp;
                        <Image src={TailI} className='language-icons' alt="python" />&nbsp;
                        <Image src={BootI} className='language-icons' alt="python" />&nbsp;
                        <Image src={CSSI} className='language-icons' alt="python" />&nbsp;
                        <Image src={FigmaI} className='language-icons' alt="python" />&nbsp;
                        <Image src={GoogleI} className='language-icons' alt="python" />
                    </div>
                </div>
                {/* Projects Row */}
                <div className="projects-row-wrapper">
                    <Projects />
                </div>
            </div>
            {/* Side Col */}
            <div className="side-col socials">
                <SocialMedia />
            </div>
        </>
    )
}

export default Main
