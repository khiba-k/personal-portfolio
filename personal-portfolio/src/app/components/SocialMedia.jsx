import React from 'react'
import Image from 'next/image'
import GitHub from '../assets/github.png'
import LinkedIn from '../assets/linkedin.png'
import Upwork from '../assets/upwork.png'
import Facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'

const SocialMedia = () => {
    return (
        <>
            <a href="https://github.com/khiba-k" target="_blank"><Image className='social-icons' src={GitHub} alt="My Git Hub" /></a>
            <a href="https://www.linkedin.com/in/khiba-koenane-6477652a3/" target="_blank"><Image className='social-icons' src={LinkedIn} alt="My Git Hub" /></a>
            <a href="https://www.upwork.com/freelancers/~018682ade592de44ad" target="_blank"><Image className='social-icons' src={Upwork} alt="My Git Hub" /></a>
            <a href="https://www.facebook.com/khiba.koenane.1" target="_blank"><Image className='social-icons' src={Facebook} alt="My Git Hub" /></a>
            <a href="https://x.com/KhibaKoenane" target="_blank"><Image className='social-icons' src={twitter} alt="My Git Hub" /></a>
        </>
    )
}

export default SocialMedia
