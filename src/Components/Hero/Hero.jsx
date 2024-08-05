import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.webp'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
       <img src={profile_img} alt="" />
       <h1><span>I'm Ashish Gupta,</span> Computer Science student from VIT Vellore</h1>
       <p>I am a certified AWS Cloud Practitioner and Solutions Architect- Associate as well as a Front End Developer.</p>
       <div className="hero-action">
        <AnchorLink className='anchor-link' offset={50} href='#contact'><div className="hero-connect">Connect with me</div></AnchorLink>
        <a className='anchor' href="https://drive.google.com/file/d/1A5lLMboddx-KsSOLcj36tD_qfMOvFrSj/view?usp=sharing"><div className="hero-resume">My Resume</div></a>
       </div>
    </div>
  )
}

export default Hero