import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>A 4th year student of Computer Science. Front End Developer and a Certified AWS Cloud Practioner and Solutions Architect- Associate.</p>
                    <p>I love to design algorithm and solve challenging DSA questions. I am currently doing a research project based upon Explainable AI. You can find me on leetcode during my freetime, planting some binary trees.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"80%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement"><h1>AWS</h1><p>Certified Cloud Practitioner</p></div>
            <hr />
            <div className="about-achievement"><h1>AWS</h1><p>Certified Solutions Architect- Associate</p></div>
            <hr />
            <div className="about-achievement">
                <h1>9.30 CGPA</h1>
                <p>B.Tech CSE</p>
            </div>
        </div>
    </div>
  )
}

export default About