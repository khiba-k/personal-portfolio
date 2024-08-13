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
import GitHub from '../assets/github.png'
import LinkedIn from '../assets/linkedin.png'
import Upwork from '../assets/upwork.png'
import Facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'

const Intro = () => {
    return (
        <>
            {/* Side Col */}
            <div className="side-col"></div>
            {/* Middle Col */}
            <div className="middle-col">
                {/* About Row */}
                <div id="intro" className='about-col'>
                    <div className='upper-row'>
                        <div className="p-col">
                            <p className="intro-p">
                                from concept to{" "}
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
                        <p style={{ color: "white" }}>Yeah, I'm Multilingual and Handy With The Tools: &nbsp;</p>
                        <Image src={PythonI} style={{ width: "42px", height: "42px" }} alt="python" />&nbsp;
                        <Image src={NxtI} style={{ width: "42px", height: "42px" }} alt="python" />&nbsp;
                        <Image src={ReactI} style={{ width: "42px", height: "42px" }} alt="python" />&nbsp;
                        <Image src={JscriptI} style={{ width: "42px", height: "42px" }} alt="python" />&nbsp;
                        <Image src={HTMLI} style={{ width: "42px", height: "42px" }} alt="python" />&nbsp;
                        <Image src={TailI} style={{ width: "42px", height: "42px" }} alt="python" />&nbsp;
                        <Image src={BootI} style={{ width: "42px", height: "42px" }} alt="python" />&nbsp;
                        <Image src={CSSI} style={{ width: "42px", height: "42px" }} alt="python" />&nbsp;
                        <Image src={FigmaI} style={{ width: "42px", height: "42px" }} alt="python" />&nbsp;
                        <Image src={GoogleI} style={{ width: "42px", height: "42px" }} alt="python" /></div>
                </div>
                {/* Projects Row */}
                <div>
                    <Projects/>
                </div>
            </div>
            {/* Side Col */}
            <div className="side-col socials">
                <a href="https://github.com/khiba-k" target="_blank"><Image className='social-icons' src={GitHub} alt="My Git Hub"/></a>
                <a href="https://www.linkedin.com/in/khiba-koenane-6477652a3/" target="_blank"><Image className='social-icons' src={LinkedIn} alt="My Git Hub"/></a>
                <a href="https://www.upwork.com/freelancers/~018682ade592de44ad" target="_blank"><Image className='social-icons' src={Upwork} alt="My Git Hub"/></a>
                <a href="https://www.facebook.com/khiba.koenane.1" target="_blank"><Image className='social-icons' src={Facebook} alt="My Git Hub"/></a>
                <a href="https://x.com/KhibaKoenane" target="_blank"><Image className='social-icons' src={twitter} alt="My Git Hub"/></a>
            </div>
        </>
    )
}

export default Intro
