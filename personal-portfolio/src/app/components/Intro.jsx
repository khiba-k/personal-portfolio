import React from 'react'
import Image from 'next/image'
import photo from '../assets/headshot.png'

const Intro = () => {
    return (
        <>
            {/* Side Col */}
            <div className="side-col"></div>
            {/* Middle Col */}
            <div className="middle-col">
                {/* About Row */}
                <div className='about-row'>
                    <div className="p-col">
                        <p className="intro-p">
                            from concept to{" "}
                            <span className="creation-span">creation</span>
                        </p>
                        <p style={{ color: "white", width: "800px" }}>Hello World! I’m Khiba Koenane, a visionary full-stack developer from Southern Africa, specializing in crafting seamless, innovative web solutions. Let’s turn your vision into reality with cutting-edge technology and expert design.</p>
                    </div>
                    <div className="p2-col">
                        <div className='headshot-row'>
                            <Image src={photo} style={{ height: "280px", width: "280px", borderRadius: "50%" }} alt='professional photo' />
                        </div>
                        <div className='skills'>
                            <p style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "20px" }}>Khiba Koenane, <span style={{ color: "#FF0066" }}>Web Developer | </span>  <span style={{ color: "#9C3D9B" }}>Software Developer | </span> <span style={{ color: "skyblue" }}>IoT Developer</span></p>
                        </div>
                    </div>
                </div>
                {/* Projects Row */}
                <div className='jobs-row'>
                    <h1 style={{ color: 'white' }}>Projects</h1>
                    <div>eufiueheroi</div>
                    <div>efirery09</div>
                    <div>rioreoeo</div>
                </div>
            </div>
            {/* Side Col */}
            <div className="side-col"></div>
        </>
    )
}

export default Intro
